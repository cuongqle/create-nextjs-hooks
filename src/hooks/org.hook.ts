import {useFetch} from "../shared/utils/useFetch";

export const useOrganizations = () => useFetch('/api/orgs')
