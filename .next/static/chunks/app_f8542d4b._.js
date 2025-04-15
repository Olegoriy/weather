(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_f8542d4b._.js", {

"[project]/app/FetchWeather/FetchWeather.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "loader": "FetchWeather-module__C0SLva__loader",
  "loaderContainer": "FetchWeather-module__C0SLva__loaderContainer",
  "spin": "FetchWeather-module__C0SLva__spin",
});
}}),
"[project]/app/FetchWeather/FetchWeather.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$FetchWeather$2f$FetchWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/FetchWeather/FetchWeather.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FetchWeather = ({ city, onDataLoaded })=>{
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FetchWeather.useEffect": ()=>{
            const fetchWeather = {
                "FetchWeather.useEffect.fetchWeather": async ()=>{
                    try {
                        const API_KEY = '7f9080f430964821b52103358250804';
                        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&days=7&lang=ru`);
                        if (!response.ok) throw new Error('Ошибка получения данных');
                        const data = await response.json();
                        onDataLoaded(data);
                        setError(null);
                    } catch (err) {
                        setError(`Не удалось получить данные о погоде для города ${city}`);
                        console.error(err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["FetchWeather.useEffect.fetchWeather"];
            fetchWeather();
        }
    }["FetchWeather.useEffect"], [
        city,
        onDataLoaded
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$FetchWeather$2f$FetchWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loaderContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$FetchWeather$2f$FetchWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loader
            }, void 0, false, {
                fileName: "[project]/app/FetchWeather/FetchWeather.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/FetchWeather/FetchWeather.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: error
    }, void 0, false, {
        fileName: "[project]/app/FetchWeather/FetchWeather.tsx",
        lineNumber: 84,
        columnNumber: 21
    }, this);
    return null;
};
_s(FetchWeather, "SXWAzFwbcALCYWswwJxoaTIbO8U=");
_c = FetchWeather;
const __TURBOPACK__default__export__ = FetchWeather;
var _c;
__turbopack_context__.k.register(_c, "FetchWeather");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/DisplayWeather/DisplayWeather.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "backButton": "DisplayWeather-module__BN2TTG__backButton",
  "container": "DisplayWeather-module__BN2TTG__container",
  "feelsLike": "DisplayWeather-module__BN2TTG__feelsLike",
  "forecast": "DisplayWeather-module__BN2TTG__forecast",
  "forecastContainer": "DisplayWeather-module__BN2TTG__forecastContainer",
  "forecastDay": "DisplayWeather-module__BN2TTG__forecastDay",
  "temperature": "DisplayWeather-module__BN2TTG__temperature",
  "title": "DisplayWeather-module__BN2TTG__title",
  "weatherIcon": "DisplayWeather-module__BN2TTG__weatherIcon",
  "weatherInfo": "DisplayWeather-module__BN2TTG__weatherInfo",
});
}}),
"[project]/app/DisplayWeather/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$FetchWeather$2f$FetchWeather$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/FetchWeather/FetchWeather.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/DisplayWeather/DisplayWeather.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const DisplayWeatherPage = ()=>{
    _s();
    const [weatherData, setWeatherData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const city = searchParams.get('city') ?? 'Санкт-Петербург';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: '/',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/app/DisplayWeather/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/DisplayWeather/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$FetchWeather$2f$FetchWeather$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                city: city,
                onDataLoaded: (data)=>setWeatherData(data)
            }, void 0, false, {
                fileName: "[project]/app/DisplayWeather/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            weatherData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weatherInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: [
                                    weatherData.location.name,
                                    ", ",
                                    weatherData.location.country
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Локальное время:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.location.localtime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Температура:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.temp_c,
                                    "°C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Ощущается как:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.feelslike_c,
                                    "°C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Состояние:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.condition.text
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weatherIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: `https:${weatherData.current.condition.icon}`,
                                    alt: weatherData.current.condition.text,
                                    width: 64,
                                    height: 64,
                                    quality: 80,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/app/DisplayWeather/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Влажность:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.humidity,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Скорость ветра:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 45,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.wind_kph,
                                    " км/ч"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Направление ветра:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 46,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.wind_dir
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Давление:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.pressure_mb,
                                    " мбар"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Облачность:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.cloud,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "УФ-индекс:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.uv
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Видимость:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 16
                                    }, this),
                                    " ",
                                    weatherData.current.vis_km,
                                    " км"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/DisplayWeather/page.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].forecastContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Прогноз на 7 дней:"
                            }, void 0, false, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].forecast,
                                children: weatherData.forecast.forecastday.map((day)=>{
                                    // Преобразование даты в нужный формат
                                    const date = new Date(day.date);
                                    const daysOfWeekShort = [
                                        'Вс',
                                        'Пн',
                                        'Вт',
                                        'Ср',
                                        'Чт',
                                        'Пт',
                                        'Сб'
                                    ];
                                    const months = [
                                        'января',
                                        'февраля',
                                        'марта',
                                        'апреля',
                                        'мая',
                                        'июня',
                                        'июля',
                                        'августа',
                                        'сентября',
                                        'октября',
                                        'ноября',
                                        'декабря'
                                    ];
                                    const dayOfWeek = daysOfWeekShort[date.getDay()];
                                    const dayOfMonth = date.getDate();
                                    const month = months[date.getMonth()];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].forecastDay,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].data,
                                                children: [
                                                    dayOfWeek,
                                                    ", ",
                                                    dayOfMonth,
                                                    " ",
                                                    month
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Температура:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 53
                                                    }, this),
                                                    day.day.mintemp_c,
                                                    "°C - ",
                                                    day.day.maxtemp_c,
                                                    "°C"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weatherIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: `https:${day.day.condition.icon}`,
                                                    alt: day.day.condition.text,
                                                    width: 64,
                                                    height: 64,
                                                    quality: 80,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/DisplayWeather/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: day.day.condition.text
                                            }, void 0, false, {
                                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, day.date, true, {
                                        fileName: "[project]/app/DisplayWeather/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/DisplayWeather/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/DisplayWeather/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/DisplayWeather/page.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/DisplayWeather/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
_s(DisplayWeatherPage, "FYyBA8fJr+n6OTyptr3851Xlrv4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = DisplayWeatherPage;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Загрузка..."
        }, void 0, false, {
            fileName: "[project]/app/DisplayWeather/page.tsx",
            lineNumber: 96,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DisplayWeatherPage, {}, void 0, false, {
            fileName: "[project]/app/DisplayWeather/page.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/DisplayWeather/page.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c1 = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "DisplayWeatherPage");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_f8542d4b._.js.map