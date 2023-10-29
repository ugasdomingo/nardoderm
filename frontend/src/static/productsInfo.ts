export const productsInfo = [
    {
        title: 'Acne patch',
        brief: 'Unveil clear, blemish-free skin with our Acne-Fighting Patch, powered by salicylic acid. This discreet patch rapidly targets and reduces acne, minimizes scarring, and suits all skin types. Experience confidence with every application.',
        description:
            '<h3 class="title">Acne-Fighting Patch: Clear Skin in a Snap!</h3> <p>            Introducing our Acne-Fighting Patch, your secret weapon against stubborn acne breakouts.            Infused with   he magic of salicylic acid, this patch works tirelessly to penetrate deep into your pores,            combating acne-causing bacteria at its source. Salicylic acid´s exfoliating properties help to unclog pores,          reduce inflammation, and speed up the healing process. Say goodbye to blemishes and hello to a smoother,            clearer complexion with each pplication.        </p>        <h3>Why Choose Our Acne-Fighting Patch?</h3>        <ul>            <li>Targeted acne treatment</li>            <li>Rapid blemish reduction</li>            <li>Minimizes scarring</li>            <li>Easy and discreet application</li>            <li>Suitable for all skin types</li>        </ul>        <p>            Transform your skincare routine and experience the power of clear skin with our Acne-Fighting Patch.        </p>',
        imageHd:
            'https://res.cloudinary.com/minteados/image/upload/v1698561990/nardoderm/producto-1_ikoyph.webp',
        path: 'producto1'
    },
    {
        title: 'Skin-Brightening Gel',
        brief: 'Illuminate your complexion with our Skin-Brightening Gel, featuring Kojic Acid and Vitamin C. Fade dark spots, even skin tone, and boost hydration for a radiant look. Suitable for all skin types, it unveils your inner luminosity., ultrices magna quis, aliquam nisl',
        description:
            '<h3>Skin-Brightening Gel: Illuminate Your Skin</h3>            <p>                Unlock a brighter, more youthful complexion with our Skin-Brightening Gel.                Formulated with the dynamic duo of Kojic Acid and Vitamin C, this gel targets uneven skin tone and pigmentation issues.          Kojic Acid inhibits melanin production, effectively reducing the appearance of dark spots and discoloration.                Meanwhile, Vitamin C provides antioxidant protection, enhancing your skin´s natural glow.        It´s time to embrace the luminosity within you.            </p>   <h3>Why Choose Our Skin-Brightening Gel?</h3>            <ul>                <li>Fades dark spots and hyperpigmentation</li>                <li>Boosts collagen production</li>                <li>Evens skin tone</li>                <li>Hydrates and rejuvenates</li>                <li>Suitable for all skin types</li>            </ul>            <p>                Illuminate your beauty and unveil a radiant complexion with our Skin-Brightening Gel.            </p>',
        imageHd:
            'https://res.cloudinary.com/minteados/image/upload/v1698561991/nardoderm/producto-3_ali4te.webp',
        path: 'producto2'
    },
    {
        title: 'Acne-Busting Soap',
        brief: 'Elevate your cleansing ritual with our Acne-Busting soap, infused with salicylic acid. It deep-cleanses pores, regulates sebum, and promotes balanced, fresh skin. Bid farewell to breakouts for a refreshed daily glow.',
        description:
            '<h3>Acne-Busting Soap: The Ultimate Cleanse</h3>        <p>            Our Acne-Busting soap is here to elevate your cleansing game.            Formulated with the acne-fighting prowess of salicylic acid, this soap not only removes dirt and impurities            but also helps regulate sebum production. Salicylic acid´s gentle xfoliation clears away dead skin cells,            leaving your skin feeling fresh and rejuvenated. It´s time to say goodbye to breakouts and hello to a clear,            balanced complexion.        </p>        <h3>Why Choose Our Acne-Busting soap?</h3>        <ul>            <li>Deep pore cleansing</li>            <li>Regulates oil production</li>            <li>Prevents future breakouts</li>            <li>Refreshing and invigorating</li>            <li>Suitable for daily use</li>        </ul>        <p>            Elevate your cleansing routine and reveal your skin´s natural radiance with our Acne-Busting soap.        </p>',
        imageHd:
            'https://res.cloudinary.com/minteados/image/upload/v1698561990/nardoderm/producto-2_givjkq.webp',
        path: 'producto3'
    }
];

export interface Product {
    title: string;
    brief: string;
    description: string;
    imageHd: string;
    path: string;
}
