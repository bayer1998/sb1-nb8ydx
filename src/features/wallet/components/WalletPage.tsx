import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Plus, Download } from 'lucide-react';
import { Card, Button } from '../../../shared/components';
import { useWalletStore } from '../../../shared/store/walletStore';

const WalletPage: React.FC = () => {
  const { wallet, transactions } = useWalletStore();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">Mon Wallet</h2>
        <p className="text-secondary-600">Gérez votre argent</p>
      </div>

      {/* Balance Card */}
      <Card className="bg-gradient-primary text-white">
        <div className="text-center space-y-4">
          <p className="text-primary-100">Solde total</p>
          <p className="text-5xl font-bold">{wallet?.balance?.toFixed(2) || '0.00'} €</p>
          <div className="flex gap-3 mt-6">
            <Button variant="secondary" size="md" fullWidth leftIcon={<Plus size={18} />}>
              Recharger
            </Button>
            <Button variant="secondary" size="md" fullWidth leftIcon={<Download size={18} />}>
              Retirer
            </Button>
          </div>
        </div>
      </Card>

      {/* Transactions */}
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Transactions récentes</h3>
        {transactions.length === 0 ? (
          <Card>
            <div className="text-center py-8 text-secondary-400">
              <p>Aucune transaction</p>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <Card key={transaction.id} hover>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      transaction.direction === 'in' ? 'bg-success-100' : 'bg-error-100'
                    }`}>
                      {transaction.direction === 'in' ? (
                        <ArrowDownLeft className="text-success-600" size={20} />
                      ) : (
                        <ArrowUpRight className="text-error-600" size={20} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-secondary-900">{transaction.description}</p>
                      <p className="text-sm text-secondary-500">
                        {new Date(transaction.createdAt).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>
                  <p className={`font-bold ${
                    transaction.direction === 'in' ? 'text-success-600' : 'text-error-600'
                  }`}>
                    {transaction.direction === 'in' ? '+' : '-'}
                    {transaction.amount.toFixed(2)} €
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletPage;
