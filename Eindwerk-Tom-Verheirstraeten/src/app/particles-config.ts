export const ParticlesConfig = {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 900
            }
        },
        color: {
            value: '#3BDCE1'
        },
        shape: {
            type: 'polygon',
            stroke: {
                width: 0,
                color: '#3BDCE1',
                opacity: 0.3
            },
            polygon: {
                nb_sides: 6
            }
        },
        opacity: {
            value: 0.1,
            random: true,
            anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.25,
                sync: true
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 5,
                size_min: 1.25,
                sync: true
            }
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: '#283593',
            opacity: 0.3,
            width: 3
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 2000,
                rotateY: 2000
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: false,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 3
                }
            },
            repulse: {
                distance: 250,
                duration: 2
            }
        }
    },
    retina_detect: true
};