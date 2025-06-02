export type AccountInputType = {
  label: string;
  name: string;
  errorText?: string;
  placeholder?: string;
};

export type DaumAddressType = {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  apartment: string;
  zonecode: string;
  sido: string;
  sigungu: string;
  sigunguCode: string;
  roadAddress: string;
  jibunAddress: string;
  detailAddress?: string;
};
