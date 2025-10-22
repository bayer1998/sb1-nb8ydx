import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { Button, Input } from '../../../shared/components';
import { useAuthStore } from '../../../shared/store/authStore';
import { authService } from '../services/authService';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (formData.password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères');
      return;
    }

    setLoading(true);

    try {
      const { confirmPassword, ...registerData } = formData;
      const response = await authService.register(registerData);
      login(response.user, response.token);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erreur lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary-900 mb-6">Inscription</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Prénom"
            name="firstName"
            placeholder="Jean"
            value={formData.firstName}
            onChange={handleChange}
            required
            fullWidth
          />
          <Input
            label="Nom"
            name="lastName"
            placeholder="Dupont"
            value={formData.lastName}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
          leftIcon={<Mail size={20} />}
          required
          fullWidth
        />

        <Input
          label="Téléphone"
          type="tel"
          name="phone"
          placeholder="+33 6 12 34 56 78"
          value={formData.phone}
          onChange={handleChange}
          leftIcon={<Phone size={20} />}
          required
          fullWidth
        />

        <Input
          label="Mot de passe"
          type="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          leftIcon={<Lock size={20} />}
          helperText="Minimum 8 caractères"
          required
          fullWidth
        />

        <Input
          label="Confirmer le mot de passe"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
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
          Créer mon compte
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-secondary-600">
        Déjà un compte ?{' '}
        <Link to="/auth/login" className="text-primary-600 hover:text-primary-700 font-medium">
          Se connecter
        </Link>
      </div>

      <p className="mt-6 text-xs text-center text-secondary-500">
        En créant un compte, vous acceptez nos{' '}
        <a href="#" className="text-primary-600 hover:underline">conditions d'utilisation</a>
        {' '}et notre{' '}
        <a href="#" className="text-primary-600 hover:underline">politique de confidentialité</a>.
      </p>
    </div>
  );
};

export default RegisterPage;
