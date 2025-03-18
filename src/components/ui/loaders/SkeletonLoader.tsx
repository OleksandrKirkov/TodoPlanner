import { CSSProperties } from "react"
import { twMerge } from "tailwind-merge"

interface ISkeletonLoader {
    count?: number
    style?: CSSProperties
    className?: string
}

export function SkeletonLoader({
    count = 1,
    style,
    className
}: ISkeletonLoader) {
    return (
        <>
            {Array.from({ length: count }, (_, index) => (
                <div
                    key={index}
                    className={twMerge('mb-[0.65rem] h-10 animate-pulse rounded-sm bg-dark-150/80', className)}
                    style={style}
                />
            ))}
        </>
    )
}
