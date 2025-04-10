import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { TypeUserForm } from '../../../types/auth.types'
import { useNavigate } from "react-router";
import { authService } from "../../../services/auth/auth.service";

export function useAuthForm(isLogin: boolean) {
    const { register, handleSubmit, reset } = useForm<TypeUserForm>()

    const navigate = useNavigate()
    const [isPending, startTransition] = useTransition()

    const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: TypeUserForm) =>
            authService.main('login', data),
        onSuccess() {
            startTransition(() => {
                reset()
                navigate('/')
            })
        },
        onError(error) {
            if(axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message)
            }
        }
    })

    const {mutate: mutateRegister, isPending: isRegisterPending} = useMutation({
        mutationKey: ['register'],
        mutationFn: (data: TypeUserForm) =>
            authService.main('register', data),
        onSuccess() {
            startTransition(() => {
                reset()
                navigate('/')
            })
        },
        onError(error) {
            if(axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message)
            }
        }
    })

    const onSubmit: SubmitHandler<TypeUserForm> = data => {
        if(isLogin) mutateLogin(data)
        else mutateRegister(data)
    }

    const isLoading = isPending || isLoginPending || isRegisterPending

    return {
        register,
        handleSubmit,
        onSubmit,
        isLoading
    }
}
