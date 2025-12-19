import React from 'react';
import Section from '../components/Section';

export default function Disclaimer() {
    return (
        <Section background="white">
            <div className="max-w-3xl mx-auto p-md bg-lighter rounded-md text-sm text-[#333333] leading-relaxed">
                <p className="mb-sm">
                    <strong className="text-[#1a1a1a]">Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa.
                    As informações contidas nesta página não substituem orientação médica ou dermatológica profissional.
                </p>
                <p className="mb-0">
                    Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
                    Em caso de irritação ou reação alérgica, suspenda o uso imediatamente e consulte um médico.
                    Mantenha fora do alcance de crianças. Uso externo apenas.
                </p>
            </div>

            <div className="text-center mt-xl pt-lg border-t border-light text-[#444444] text-sm">
                <p>© 2024 Kit de Mulateiro. Todos os direitos reservados.</p>
            </div>
        </Section>
    );
}
