import styles from './pagecreator.module.scss'


export default function PageCreator(){
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
    <div className={styles.scroll_snap_container}>
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
    )}