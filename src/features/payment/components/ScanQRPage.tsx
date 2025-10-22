import React from 'react';
import { Camera, Upload } from 'lucide-react';
import { Card, Button } from '../../../shared/components';

const ScanQRPage: React.FC = () => {
  const handleScanQR = () => {
    // TODO: Implement QR scanner
    alert('Scanner QR à implémenter');
  };

  const handleUploadQR = () => {
    // TODO: Implement QR upload
    alert('Upload QR à implémenter');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">Scanner un QR Code</h2>
        <p className="text-secondary-600">Scannez pour payer ou recevoir de l'argent</p>
      </div>

      {/* Scanner Area */}
      <Card padding="none">
        <div className="aspect-square bg-secondary-900 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-white/50 rounded-2xl relative">
              {/* Scanner corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-primary-500 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-primary-500 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-primary-500 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-primary-500 rounded-br-2xl" />
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-sm">Placez le QR code dans le cadre</p>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="space-y-3">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          leftIcon={<Camera size={20} />}
          onClick={handleScanQR}
        >
          Activer la caméra
        </Button>
        <Button
          variant="outline"
          size="lg"
          fullWidth
          leftIcon={<Upload size={20} />}
          onClick={handleUploadQR}
        >
          Importer depuis la galerie
        </Button>
      </div>

      {/* Info */}
      <Card className="bg-primary-50 border border-primary-200">
        <p className="text-sm text-primary-900">
          <strong>Astuce :</strong> Assurez-vous que le QR code est bien visible et éclairé pour un scan optimal.
        </p>
      </Card>
    </div>
  );
};

export default ScanQRPage;
