import { memo } from 'react'
import styles from './Loader.module.scss'
import { LucideProps } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export default memo(function Loader({
    className,
    size = 50,
    ...props
}: LucideProps & { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 50 50'
            className={twMerge(styles.loader, className)}
            {...props}
        >
            <circle
                className={styles.circle}
                cx="25"
                cy="25"
                r={size / 2.5}
                fill='none'
                strokeWidth={size / 10}
            /> 
        </svg>
    )
})
