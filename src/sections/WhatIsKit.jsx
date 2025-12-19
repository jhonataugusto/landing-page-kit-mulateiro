import React from 'react';
import Section from '../components/Section';
import StepCard from '../components/StepCard';

export default function WhatIsKit() {
    return (
        <Section background="white">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">O Ritual Completo com o Poder do Mulateiro</h2>
            <p className="text-center max-w-2xl mx-auto mb-md text-lg">
                Descubra o segredo que vem encantando a pele das mulheres da floresta há gerações. O Kit de Mulateiro é um ritual completo de beleza facial e corporal que nutre, regenera e devolve a juventude da pele.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mt-xl">
                <StepCard number="1" name="Esfoliante Facial" />
                <StepCard number="2" name="Máscara Facial" />
                <StepCard number="3" name="Creme Facial" />
                <StepCard number="4" name="Sabonete Facial" />
            </div>
        </Section>
    );
}
