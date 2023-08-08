const imagesPrefix =
    'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections';

import imgPricing from '@/assets/img/pricing.png';
import imgFeatures from '@/assets/img/features.png';
import imgBlogPosts from '@/assets/img/blog-posts.png';
import imgTestimonials from '@/assets/img/testimonials.png';
// import imgTeam from '@/assets/img/team.png';
// import imgStat from '@/assets/img/stat.png';
// import imgContent from '@/assets/img/content.png';

export default [
    {
        heading: 'Sem injetáveis',
        description:
            'Tratamentos sem injetáveis significa que em todo o processo até a conclusão, não terá aplicação de produtos com seringa.',
        items: [
            {
                image: `${imagesPrefix}/headers.jpg`,
                title: 'Page Headers',
                subtitle: '10 Examples',
                route: 'page-headers',
                pro: false,
            },
            {
                image: imgFeatures,
                title: 'Features',
                subtitle: '14 Examples',
                route: 'page-features',
                pro: false,
            },
            {
                image: imgPricing,
                title: 'Pricing',
                subtitle: '8 Examples',
                route: 'presentation',
                pro: true,
            },
            {
                image: `${imagesPrefix}/faq.jpg`,
                title: 'FAQ',
                subtitle: '1 Example',
                route: 'presentation',
                pro: true,
            },
            {
                image: imgBlogPosts,
                title: 'Blog Posts',
                subtitle: '11 Examples',
                route: 'presentation',
                pro: true,
            },
            {
                image: imgTestimonials,
                title: 'Testimonials',
                subtitle: '11 Examples',
                route: 'presentation',
                pro: true,
            },
        ],
    },
    {
        heading: 'Com injetáveis',
        description:
            'Tratamentos comm injetáveis significa que em algum momento do tratamento terá aplicação de produtos com seringa.',
        items: [
            {
                image: `${imagesPrefix}/headers.jpg`,
                title: 'Page Headers',
                subtitle: '10 Examples',
                route: 'page-headers',
                pro: false,
            },
            {
                image: imgFeatures,
                title: 'Features',
                subtitle: '14 Examples',
                route: 'page-features',
                pro: false,
            },
            {
                image: imgPricing,
                title: 'Pricing',
                subtitle: '8 Examples',
                route: 'presentation',
                pro: true,
            },
            {
                image: `${imagesPrefix}/faq.jpg`,
                title: 'FAQ',
                subtitle: '1 Example',
                route: 'presentation',
                pro: true,
            },
            {
                image: imgBlogPosts,
                title: 'Blog Posts',
                subtitle: '11 Examples',
                route: 'presentation',
                pro: true,
            },
            {
                image: imgTestimonials,
                title: 'Testimonials',
                subtitle: '11 Examples',
                route: 'presentation',
                pro: true,
            },
        ],
    },
];
