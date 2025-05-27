  import React, { useEffect, useRef, memo } from 'react';

function LiveRate() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "CAPITALCOM:GOLD|1D"
            ],
            [
              "CAPITALCOM:SILVER|1D"
            ]
          ],
          "chartOnly": false,
          "width": "1000",
          "height": "500",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "headerFontSize": "small",
          "fontColor": "rgba(219, 219, 219, 1)",
          "gridLineColor": "rgba(255, 255, 255, 0.49)",
          "backgroundColor": "rgba(238, 220, 196, 0.5)",
          "lineWidth": 1,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(179, 152, 68, 1)"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div id='liverate' className='flex items-center justify-center py-30'>
        <div className='w-[1000px] h-[500px] overflow-hidden rounded-2xl'>
            <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    </div>
  );
}

export default memo(LiveRate);



