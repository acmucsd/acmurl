import Particles from 'react-particles-js';
import React from 'react';
import styled from 'styled-components';

const particlesOptions = {
  "particles": {
    "number": {
      "value": 25,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 18,
        "color": "#e8f6fd"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 100,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#22ACEA",
      "opacity": 0.4,
      "width": 0.4734885849793636
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "random",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1202.559045649142,
        "rotateY": 868.0624057955
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 1
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

const ParticlesComponent = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
`;

const ParticlesContainer = () => {
  return (
    <ParticlesComponent>
      <Particles 
        className="particles" 
        params={particlesOptions} 
      ></Particles>
    </ParticlesComponent>
  )
}

export default ParticlesContainer;