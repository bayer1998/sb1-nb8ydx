import React, { useState } from 'react';
import { QrCode, CreditCard, Link as LinkIcon, Smartphone } from 'lucide-react';
import { Card, Button } from '../../../shared/components';

const PaymentPage: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'nfc' | 'link'>('qr');

  const paymentMethods = [
    { id: 'qr', icon: QrCode, label: 'QR Code', description: 'Générer un QR code' },
    { id: 'nfc', icon: Smartphone, label: 'NFC/Tap-to-Pay', description: 'Paiement sans contact' },
    { id: 'link', icon: LinkIcon, label: 'Pay by Link', description: 'Partager un lien' },
  ];

  const handleGeneratePayment = () => {
    // TODO: Implement payment generation
    alert(`Génération de paiement ${paymentMethod} pour ${amount}€`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">Paiement</h2>
        <p className="text-secondary-600">Choisissez votre méthode de paiement</p>
      </div>

      {/* Amount Input */}
      <Card>
        <div className="space-y-4">
          <label className="text-sm font-medium text-secondary-700">Montant à payer</label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full text-4xl font-bold text-center py-4 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-primary-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-secondary-400">
              €
            </span>
          </div>
        </div>
      </Card>

      {/* Payment Methods */}
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-3">Méthode de paiement</h3>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <Card
              key={method.id}
              hover
              onClick={() => setPaymentMethod(method.id as any)}
              className={`cursor-pointer transition-all ${
                paymentMethod === method.id
                  ? 'border-2 border-primary-600 bg-primary-50'
                  : 'border-2 border-transparent'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    paymentMethod === method.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-600'
                  }`}
                >
                  <method.icon size={24} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-secondary-900">{method.label}</p>
                  <p className="text-sm text-secondary-600">{method.description}</p>
                </div>
                {paymentMethod === method.id && (
                  <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Button
        variant="primary"
        size="lg"
        fullWidth
        leftIcon={<CreditCard size={20} />}
        onClick={handleGeneratePayment}
        disabled={!amount || parseFloat(amount) <= 0}
      >
        Générer le paiement
      </Button>

      {/* Quick Amount Buttons */}
      <div>
        <p className="text-sm text-secondary-600 mb-3">Montants rapides</p>
        <div className="grid grid-cols-4 gap-2">
          {[5, 10, 20, 50].map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value.toString())}
              className="py-3 px-4 bg-secondary-100 hover:bg-secondary-200 rounded-lg font-medium transition"
            >
              {value}€
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
