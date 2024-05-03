import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function TheHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.common}>
                <Link href="/">Главная</Link>
                <Link href="/modules">Учебные модули</Link>
                <Link href="/statistic">Статистика</Link>
            </div>
            <div className={styles.user}>
                <Link href="/user">
                    <div className={styles.avatar}>
                        <Image
                            src="default_user.svg"
                            alt="User avatar"
                            width="40"
                            height="40"
                        />
                    </div>
                </Link>
                <Link href="/logout">Выйти</Link>
            </div>
        </header>
    )
}