'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { cn } from '@/lib/utils';
import { SEGMENTS, contactFormSchema, type ContactFormValues } from '@/lib/validations/contact';

type SubmitStatus = 'idle' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Falha ao enviar');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nome completo" error={errors.name?.message} htmlFor="name">
          <Input id="name" autoComplete="name" {...register('name')} error={!!errors.name} />
        </Field>

        <Field label="E-mail" error={errors.email?.message} htmlFor="email">
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register('email')}
            error={!!errors.email}
          />
        </Field>

        <Field label="Telefone" error={errors.phone?.message} htmlFor="phone">
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(11) 90000-0000"
            {...register('phone')}
            error={!!errors.phone}
          />
        </Field>

        <Field label="Empresa" error={errors.company?.message} htmlFor="company">
          <Input
            id="company"
            autoComplete="organization"
            {...register('company')}
            error={!!errors.company}
          />
        </Field>
      </div>

      <Field label="Segmento" error={errors.segment?.message} htmlFor="segment">
        <select
          id="segment"
          defaultValue=""
          {...register('segment')}
          className={cn(
            'h-11 w-full rounded-md border bg-white px-3 text-base text-navy-900 transition-colors duration-200',
            'focus:border-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-800/50',
            errors.segment ? 'border-red-400' : 'border-slate-300'
          )}
        >
          <option value="" disabled>
            Selecione...
          </option>
          {SEGMENTS.map((segment) => (
            <option key={segment} value={segment}>
              {segment}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mensagem" error={errors.message?.message} htmlFor="message">
        <Textarea
          id="message"
          placeholder="Conte um pouco sobre a operação da sua empresa..."
          {...register('message')}
          error={!!errors.message}
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button>

      {status === 'success' && (
        <p role="status" className="text-sm font-medium text-green-700">
          Mensagem enviada! Nossa equipe entrará em contato em breve.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Não foi possível enviar sua mensagem. Tente novamente.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
