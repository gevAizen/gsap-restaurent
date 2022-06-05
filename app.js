window.addEventListener('load', loader)

function loader() {
  console.log('start');
  const TLLOAD = gsap.timeline({
    default: {
      ease: 'power2'
    }
  })

  TLLOAD
  .to(
    '.images-container',
    {
      height: 400,
      duration: .75,
      delay: .4
    })
    .to('.bloc-txt',{height: 'auto', duration: .6}, '-=0.8')
    .to('.bloc-txt h2',{y: 0}, '-=0.6')
    .to('.flip.f2',{y: 0, duration: .6})
    .to('.flip-img1',{display: 'none', duration: 0})
    .to('.flip.f2',{y: '-100%'})
    .to('.load-container',{autoAlpha: 0, duration: .8, delay: .7})
    .to('.load-container',{display: 'none', duration: 0})
    .add(() => {
      document.querySelector('video').play()
    }, '-=0.8')
    .from('.home-content h1',{autoAlpha: 0, y: -50})
    .to('.home-content .middle-line',{height: 200}, '-=0.4')
    .from('.home-content button',{autoAlpha: 0, y: -40}, '-=0.2')
}