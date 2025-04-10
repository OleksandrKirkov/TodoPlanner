import { twMerge } from "tailwind-merge"
import styles from './AuthForm.module.scss'
import { useAuthForm } from "./useAuthForm"
import { AuthToggle } from "./AuthToggle"
import { useState } from "react"

export function AuthForm() {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const { handleSubmit, isLoading, onSubmit, register } = useAuthForm(isLogin)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-sm mx-auto"
        >
            <div className="mb-4">
                <label className="text-gray-600">
                    Email
                    <input
                        type='email'
                        placeholder="Enter email: "
                        {...register('email', {required: true})}
                        className={twMerge(
                            styles['input-field'],
                            'w-full p-2 border rounded focus:outline-none focus:border-blue-500'
                        )}
                    />
                </label>
            </div>

            <div className="mb-4">
                <label className="text-gray-600">
                    Password
                    <input
                        type="password"
                        placeholder="Enter password: "
                        {...register('password', {required:  true})}
                        className={twMerge(
                            styles['input-field'],
                            'w-full p-2 border rounded focus:outline-none focus:border-blue-500'
                        )}
                    />
                </label>
            </div>

            <div className="mb-3">
                <button
                    type="submit"
                    className={twMerge(
                        styles['btn-primary'],
                        isLogin ? 'bg-blue-500' : 'bg-teal-500',
                        isLoading ? 'opacity-75 cursor-not-allowed' : ''
                    )}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : isLoading ? 'Login' : 'Register'}
                </button> 
            </div>

            <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
        </form>
    )
}
