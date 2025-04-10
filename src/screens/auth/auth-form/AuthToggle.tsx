import { Dispatch, SetStateAction } from "react";

interface Props {
    isLogin: boolean
    setIsLogin: Dispatch<SetStateAction<boolean>>
}

export function AuthToggle({ isLogin, setIsLogin }: Props) {
    return (
        <div className="text-center text-base mt-3">
            {isLogin ? (
                <p>
                    Not Account?{' '}
                    <button
                        type="button"
                        className="text-blue-500 text-base"
                        onClick={() => setIsLogin(false)}
                    >
                        Register
                    </button>
                </p>
            ) : (
                <p>
                    I Have Account{' '}
                    <button
                        type="button"
                        className="text-blue-500 text-base"
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                </p>
            )}
        </div>
    )
}
