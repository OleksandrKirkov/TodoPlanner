import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/user.service";

export function useProfile() {
    const { data, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userService.getProfile(),
        retry: 1,
        refetchInterval: 1800000
    })
    
    const profile = data
    return {
        isLoading,
        user: profile
    }
}
