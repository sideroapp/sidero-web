import { z } from 'zod';

export const SEGMENTS = ['Bobinas', 'Telhas', 'Perfis', 'Estruturas metálicas', 'Outro'] as const;

// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;
const stripControlChars = (value: string) => value.replace(CONTROL_CHARS, '');
const singleLine = (label: string) =>
  z
    .string()
    .trim()
    .transform(stripControlChars)
    .refine((value) => !/[\r\n]/.test(value), `${label} não pode conter quebras de linha.`);

export const contactFormSchema = z.object({
  name: singleLine('Nome').pipe(
    z.string().min(2, 'Informe seu nome completo.').max(100, 'Nome muito longo.')
  ),
  email: z.string().trim().email('Informe um e-mail válido.').max(254, 'E-mail muito longo.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Informe um telefone válido com DDD.')
    .max(20, 'Telefone muito longo.')
    .regex(/^[\d\s()+-]+$/, 'Use apenas números e símbolos de telefone.'),
  company: singleLine('Empresa').pipe(
    z.string().min(2, 'Informe o nome da empresa.').max(150, 'Nome da empresa muito longo.')
  ),
  segment: z.enum(SEGMENTS, { error: 'Selecione um segmento.' }),
  message: z
    .string()
    .trim()
    .transform(stripControlChars)
    .pipe(
      z
        .string()
        .min(10, 'Conte um pouco mais (mínimo 10 caracteres).')
        .max(2000, 'Mensagem muito longa (máximo 2000 caracteres).')
    ),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
