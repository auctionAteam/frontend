import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

export interface UserInfomation {
  email: string;
  name: string;
  address: string;
}

export interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const startAuction = async ({ itemId, token }: { itemId: number; token: string }) => {
  try {
    const response = await axios.post(
      `${baseURL}/auction/${itemId}`,
      {}, // body 없음
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('경매 시작 실패:', error);
    throw error;
  }
};

export const bidAuction = async ({
  itemId,
  buyerId,
  price,
  token,
}: {
  itemId: number;
  buyerId: number;
  price: number;
  token: string;
}) => {
  try {
    const response = await axios.put(
      `${baseURL}/auction/${itemId}`,
      {
        buyerId,
        price,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response);
    // return response.data;
  } catch (error) {
    console.error('입찰 실패:', error);
    throw error;
  }
};
export const getItem = async ({
  id,
  setItem,
  setImages,
  setStatus,

}: {
  id: number;
  setItem: (item: any) => void;
  setImages: (images: string[]) => void;
  setStatus: (status: string) => void;

}) => {
  try {
    const response = await axios.get(`${baseURL}/items/${id}`);
    const itemData = response.data[0];
    setItem(itemData);
    setStatus(itemData.state);
    setImages(JSON.parse(itemData.img));
    
  } catch (err) {
    console.error('요청 에러:', err);
  }
};

export const getItemStatusOnly = async ({
  id,
  setItem,
  setStatus,
}: {
  id: number;
  setItem: (item: any) => void;
  setStatus: (status: string) => void;
}) => {
  try {
    const response = await axios.get(`${baseURL}/items/${id}`);
    const itemData = response.data[0];
    setItem(itemData);
    setStatus(itemData.state);
  } catch (err) {
    console.error('요청 에러:', err);
  }
};

export const handleLike = async (
  itemId: number,
  email: string,
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);

  try {
    const response = await axios.post(`${baseURL}/items/${itemId}/like`, { email });
    // 서버에서 좋아요 상태를 반환한다고 가정
    const newLikeStatus = response.data.isLiked;
    setIsLiked(newLikeStatus);
  } catch (error: any) {
    console.error(error);
    alert(error.response?.data?.message || "오류가 발생했습니다.");
  } finally {
    setIsLoading(false);
  }
};

