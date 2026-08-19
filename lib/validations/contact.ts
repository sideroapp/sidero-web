import { z } from 'zod';

export const SEGMENTS = ['Bobinas', 'Telhas', 'Perfis', 'Estruturas metálicas', 'Outro'] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome completo.'),
  email: z.string().trim().email('Informe um e-mail válido.'),
  phone: z
    .string()
    .trim()
    .min(10, 'Informe um telefone válido com DDD.')
    .regex(/^[\d\s()+-]+$/, 'Use apenas números e símbolos de telefone.'),
  company: z.string().trim().min(2, 'Informe o nome da empresa.'),
  segment: z.enum(SEGMENTS, { error: 'Selecione um segmento.' }),
  message: z.string().trim().min(10, 'Conte um pouco mais (mínimo 10 caracteres).'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
