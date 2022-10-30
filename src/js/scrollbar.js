import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

Scrollbar.use(OverscrollPlugin);

Scrollbar.init(document.querySelector('#html'), {
    renderByPixels: true,
    plugins: {
        overscroll: {
            enable: true,
            damping: 0.2,
            effect: 'glow',
            maxOverscroll: 30,
        },
    },
});
