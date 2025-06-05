import useMediaQuery from './useMediaQuery';

const useDeviceSize = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width:767px)');

  const isItemListDesktop = useMediaQuery('(min-width: 1021px) and (max-width: 1275px)');
  const isItemListTablet = useMediaQuery('(min-width:768px) and (max-width:1020px)');

  return { isDesktop, isTablet, isMobile, isItemListDesktop, isItemListTablet };
};

export default useDeviceSize;
