export function isRestaurantOpen(): boolean {
  const now = new Date();
  
  // الحصول على الوقت الحالي بالساعات والدقائق
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeInMinutes = currentHours * 60 + currentMinutes;

  // الفترة الأولى: من 11:00 صباحاً (660 دقيقة) إلى 3:00 عصراً (900 دقيقة)
  const shift1Start = 11 * 60; // 11:00
  const shift1End = 15 * 60;   // 15:00

  // الفترة الثانية: من 6:00 مساءً (1080 دقيقة) إلى 11:00 مساءً (1380 دقيقة)
  const shift2Start = 18 * 60; // 18:00
  const shift2End = 23 * 60;   // 23:00

  const inShift1 = currentTimeInMinutes >= shift1Start && currentTimeInMinutes < shift1End;
  const inShift2 = currentTimeInMinutes >= shift2Start && currentTimeInMinutes < shift2End;

  return inShift1 || inShift2;
}