import styles from './Footer.module.css'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.table}>
                <div>
                    <ol>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus commodi quis, repudiandae culpa, consectetur nihil voluptas velit expedita, fuga eveniet doloribus nam eius quas voluptatem id atque quia accusamus.</li>
                        <li>Culpa mollitia nam delectus et exercitationem, vitae ab facere accusantium saepe aspernatur soluta numquam nesciunt? Sapiente, nostrum quia, enim tempore odit corporis placeat possimus voluptate sunt ut aperiam fuga voluptatem.</li>
                        <li>Hic distinctio delectus assumenda. Hic incidunt ipsa maiores laudantium officia culpa nobis cupiditate nisi possimus illum nulla quidem enim optio praesentium officiis sint aspernatur, est explicabo quasi ex rerum dolores!</li>
                    </ol>
                </div>
                <div>
                    <ol>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus commodi quis, repudiandae culpa, consectetur nihil voluptas velit expedita, fuga eveniet doloribus nam eius quas voluptatem id atque quia accusamus.</li>
                        <li>Culpa mollitia nam delectus et exercitationem, vitae ab facere accusantium saepe aspernatur soluta numquam nesciunt? Sapiente, nostrum quia, enim tempore odit corporis placeat possimus voluptate sunt ut aperiam fuga voluptatem.</li>
                        <li>Hic distinctio delectus assumenda. Hic incidunt ipsa maiores laudantium officia culpa nobis cupiditate nisi possimus illum nulla quidem enim optio praesentium officiis sint aspernatur, est explicabo quasi ex rerum dolores!</li>
                    </ol>
                </div>
                <div>
                    <ol>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus commodi quis, repudiandae culpa, consectetur nihil voluptas velit expedita, fuga eveniet doloribus nam eius quas voluptatem id atque quia accusamus.</li>
                        <li>Culpa mollitia nam delectus et exercitationem, vitae ab facere accusantium saepe aspernatur soluta numquam nesciunt? Sapiente, nostrum quia, enim tempore odit corporis placeat possimus voluptate sunt ut aperiam fuga voluptatem.</li>
                        <li>Hic distinctio delectus assumenda. Hic incidunt ipsa maiores laudantium officia culpa nobis cupiditate nisi possimus illum nulla quidem enim optio praesentium officiis sint aspernatur, est explicabo quasi ex rerum dolores!</li>
                    </ol>
                </div>
            </div>
            <div className={styles.table + " "+ styles.test}>
                <span>&#169; Turtle Shell</span>
                <span>|</span>
                <span>Terms of Service</span>
                <span>|</span>
                <span>Privacy</span>
                <span>|</span>
                <span>Legal</span>
            </div>
        </footer>
    )
}