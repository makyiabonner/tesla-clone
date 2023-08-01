import styles from 'nav.module.scss';


export default function Nav(){
    return (
        <>
            <div className={styles.credit_info}>
                <h3 className={styles.credit_info_h3}>'17,500 Federal Tax Credit'</h3>
                <p className={styles.credit_info_p}>'Available for new Model 3 and Model Y. Reductions to tax credit likely after Dec 31.'</p>
                <a href="/" className={styles.credit_info_a}>'See Details'</a>
            </div>
            <nav className={styles.nav}>
                <img src="" alt="tesla-icon" className={styles.logo} />
                <ul className={styles.nav_list}>
                    <li className={styles.nav_list_item}>Vehicles</li>
                    <li className={styles.nav_list_item}>Energy</li>
                    <li className={styles.nav_list_item}>Charging</li>
                    <li className={styles.nav_list_item}>Discover</li>
                    <li className={styles.nav_list_item}>Shop</li>
                </ul>
                <div className={styles.nav_help}>
                    <img src="" alt="customer-support-icon" className={styles.nav_help_icons} />
                    <img src="" alt="language-icon" className={styles.nav_help_icons} />
                    <img src="" alt="profile-icon" className={styles.nav_help_icons} />
                </div>
            </nav>
        </>
    )
}