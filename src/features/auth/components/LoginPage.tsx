import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Fingerprint } from 'lucide-react';
import { Button, Input } from '../../../shared/components';
import { useAuthStore } from '../../../shared/store/authStore';
import { authService } from '../services/authService';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login({ email, password });
      login(response.user, response.token);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  const handleBiometricLogin = async () => {
    // TODO: Implement biometric authentication
    alert('Authentification biométrique bientôt disponible');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary-900 mb-6">Connexion</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftIcon={<Mail size={20} />}
          required
          fullWidth
        />

        <Input
          label="Mot de passe"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          leftIcon={<Lock size={20} />}
          required
          fullWidth
        />

        {error && (
          <div className="bg-error-50 text-error-600 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
        >
          Se connecter
        </Button>
      </form>

      <div className="mt-6">
        <Button
          type="button"
          variant="outline"
          size="lg"
          fullWidth
          leftIcon={<Fingerprint size={20} />}
          onClick={handleBiometricLogin}
        >
          Connexion biométrique
        </Button>
      </div>

      <div className="mt-6 text-center space-y-2">
        <Link to="/auth/forgot-password" className="text-primary-600 hover:text-primary-700 text-sm">
          Mot de passe oublié ?
        </Link>
        <div className="text-sm text-secondary-600">
          Pas encore de compte ?{' '}
          <Link to="/auth/register" className="text-primary-600 hover:text-primary-700 font-medium">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
