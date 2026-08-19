import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { contactFormSchema } from '@/lib/validations/contact';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Corpo da requisição inválido.' }, { status: 400 });
  }

  try {
    contactFormSchema.parse(body);

    // TODO: integrar com serviço de e-mail/CRM quando definido (fora do escopo da Fase 1).
    console.info('[contact] novo lead recebido');

    return NextResponse.json({ message: 'Mensagem recebida com sucesso.' }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Dados inválidos.', errors: error.flatten().fieldErrors },
        { status: 422 }
      );
    }
    return NextResponse.json({ message: 'Erro inesperado.' }, { status: 500 });
  }
}
