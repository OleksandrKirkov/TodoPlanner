import { useQuery } from "@tanstack/react-query";

export function useProfile() {
    const { data, isLoading } = useQuery({
        queryKey: ['profile'],
        //queryFn: () => userService.fetchProfile(),
        retry: 1,
        refetchInterval: 1800000
    })
    
    //const profile = data?.data
    const profile = {}
    return {
        isLoading,
        user: profile
    }
}
