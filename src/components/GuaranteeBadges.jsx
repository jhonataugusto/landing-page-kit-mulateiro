import React from 'react';
import { IconLock, IconPackage, IconReturn } from './icons';

const items = [
    { Icon: IconLock, title: 'Compra Protegida', text: 'Seus dados estão 100% seguros' },
    { Icon: IconPackage, title: 'Entrega Garantida', text: 'Enviamos para todo o Brasil' },
    { Icon: IconReturn, title: 'Troca ou Devolução', text: 'Garantia de satisfação' },
];

export default function GuaranteeBadges() {
    return (
        <div className="guarantee-badges">
            {items.map(({ Icon, title, text }) => (
                <div key={title} className="guarantee-badges__item">
                    <span className="guarantee-badges__icon" aria-hidden="true">
                        <Icon className="w-7 h-7" />
                    </span>
                    <h4 className="guarantee-badges__title">{title}</h4>
                    <p className="guarantee-badges__text">{text}</p>
                </div>
            ))}
        </div>
    );
}
