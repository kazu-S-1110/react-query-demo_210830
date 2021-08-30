import axios from 'axios';
import { useQuery } from 'react-query';
import { Urls } from '../types/types';

export const useQueryUrls = () => {
  const getUrls = async () => {
    const { data } = await axios.get<Urls[]>('http://localhost:8000/api/Favo');
    return data;
  };

  return useQuery<Urls[], Error>({
    queryKey: 'urls',
    queryFn: getUrls,
    staleTime: 6000,
  });
};
