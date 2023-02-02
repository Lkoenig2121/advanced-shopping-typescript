import * as React from 'react';
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"})

export function formatCurrency (number: number) {
  return (
      CURRENCY_FORMATTER.format(number)
  );
}
// Currently at 25:10 in the video LETS GET IT LUKEY!!!!!!!!!!