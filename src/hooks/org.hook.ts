import {useFetch} from "../shared/utils/useFetch";

export const useOrganizations = () => useFetch('/api/orgs')
export const useOrganizationDetails = (id) => useFetch(`/api/orgs/${id}/details`)
