import {Ref,ref} from "vue"
export type ApiRequest = ()=>Promise<void>
export  interface  UseableAPI<T>{
    response:Ref<T|undefined>;
    requesy:ApiRequest
}

function useApi<T>(url: RequestInfo, options?: RequestInit) {
    // @ts-ignore
    const response: Ref<t | undefined> = ref();
    // @ts-ignore
    const request = async () => {
        // @ts-ignore
        const res = await fetch(rl, options);
        const data = await res.json();
        response.value = data;

    };
    return {
        response,
        request
    }
}

export {useApi};
export default useApi;