import styles from './pagecreator.module.scss';
import Nav from '../nav';
import React, { useEffect, useState, useRef } from 'react';

export default function PageCreator(){
    const [navColor, setNavColor] = useState('white');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
  
    function handleScroll() {
      if (scrollContainerRef.current) {
        const scrollContainer = scrollContainerRef.current;
        const scrollPosition = scrollContainer.scrollTop;
        const threshold = 100;
        setNavColor(scrollPosition > threshold ? 'black' : 'white');
      }
    }
  
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => {
          scrollContainer.removeEventListener('scroll', handleScroll);
        };
      }
    }, []);

    const pages = [
        {id:1, subtitle: 'Model 3', price:'$32,740', img:'/photos/model-3.jpg'},
        {id:2, subtitle: 'Model Y', price:'$40,240', img:'/photos/model-y.jpg'},
        {id:3, subtitle: 'Model S', price:false, link:'Explore Inventory', img:'/photos/model-s.jpg'},
        {id:4, subtitle: 'Model X', price:false, link:'Explore Inventory', img:'/photos/model-x.jpg'},
        {id:5, subtitle: 'Solar Panels', price:false, link:'Schedule a Virtual Consultation', img:'/photos/solar-panel.jpg'},
        {id:6, subtitle: 'Solar Roof', price:false, link:false, text:'Produce Clean Energy From Your Roof', img:'/photos/solar-roof.jpg'},
        {id:7, subtitle: 'Powerwall', price:false, link:false, text:false, img:'/photos/powerwall.jpg'},
        {id:8, subtitle: 'Accessories', price:false, link:false, text:false, img:'/photos/accessories.jpg'}
      ];
    
    return (
    <>
        <Nav color={navColor} />
    <div className={styles.scroll_snap_container} ref={scrollContainerRef}>
        <video className={`w-100 ${styles.video}`} autoPlay loop muted>
          <source src='https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4' type="video/mp4" />
        </video>
        <section className={styles.hero_section}>
          <div className='d-flex flex-column align-items-center'>
            <h1 className={styles.h1}>Experience Tesla</h1>
            <p className={styles.p}>Schedule a Demo Drive Today</p>
          </div>
          <button className={styles.hero_light_button}>Demo Drive</button>
        </section>
        {pages.map(page => {
            if(page.price){
            return (
                <section key={page.id} style={{backgroundImage:`url(${page.img})`}} className={styles.page}>
                    <div>
                        <h1 className={styles.subtitle}>{page.subtitle}</h1>
                        <p className={styles.price}>{`Starting at ${page.price}`}<br></br>After Federal Tax Credit</p>
                    </div>
                    <div className={`d-flex flex-column flex-md-row ${styles.page_twobutton_layout}`}>
                        <button className={styles.page_light_button}>Explore Inventory</button>
                        <button className={styles.page_dark_button}>Custom Order</button>
                    </div> 
                </section>
            )}
            if(page.link === 'Explore Inventory'){
                return (
                <section key={page.id} style={{backgroundImage:`url(${page.img})`}} className={styles.page}>
                    <div>
                        <h1 className={styles.subtitle}>{page.subtitle}</h1>
                        <a className={styles.link}><p>{page.link}</p></a>
                    </div>
                    <div className={`d-flex flex-column flex-md-row ${styles.page_twobutton_layout}`}>
                    <button className={styles.page_light_button}>Order Now</button>
                    <button className={styles.page_dark_button}>Learn More</button>
                    </div> 
                </section>
                )}
            if(page.link === 'Schedule a Virtual Consultation'){
                return (
                <section key={page.id} style={{backgroundImage:`url(${page.img})`}} className={styles.page}>
                    <div>
                        <h1 className={styles.subtitle}>{page.subtitle}</h1>
                        <a className={styles.link}><p>{page.link}</p></a>
                    </div>
                    <div className={`d-flex flex-column flex-md-row ${styles.page_twobutton_layout}`}>
                    <button className={styles.page_light_button}>Order Now</button>
                    <button className={styles.page_dark_button}>Learn More</button>
                    </div>  
                </section>
                )}
            if(page.text){
                return (
                <section key={page.id} style={{backgroundImage:`url(${page.img})`}} className={styles.page}>
                    <div>
                        <h1 className={styles.subtitle}>{page.subtitle}</h1>
                        <p className={styles.text}>{page.text}</p>
                    </div>
                    <div className={`d-flex flex-column flex-md-row ${styles.page_twobutton_layout}`}>
                    <button className={styles.page_light_button}>Order Now</button>
                    <button className={styles.page_dark_button}>Learn More</button>
                    </div> 
                </section>
                )}
            if(page.subtitle === 'Powerwall'){
                return (
                <section key={page.id} style={{backgroundImage:`url(${page.img})`}} className={styles.page}>
                    <h1 className={styles.subtitle}>{page.subtitle}</h1>
                    <div className={`d-flex flex-column flex-md-row ${styles.page_twobutton_layout}`}>
                    <button className={styles.page_light_button}>Order Now</button>
                    <button className={styles.page_dark_button}>Learn More</button>
                    </div> 
                </section>
                )}
            if(page.subtitle === 'Accessories'){
                return (
                <section key={page.id} style={{backgroundImage:`url(${page.img})`}} className={styles.page}>
                    <h1 className={styles.subtitle}>{page.subtitle}</h1>
                    <button className={styles.page_light_button}>Shop Now</button> 
                </section>
                )}
            })}
        </div>
        </>
    )}