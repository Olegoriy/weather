(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_(opened)_LandingPage_bb7fa91b._.js", {

"[project]/src/app/(opened)/LandingPage/components/FetchWeather/FetchWeather.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const FetchWeather = ({ onDataLoaded })=>{
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FetchWeather.useEffect": ()=>{
            const fetchWeather = {
                "FetchWeather.useEffect.fetchWeather": async ()=>{
                    try {
                        const API_KEY = '7f9080f430964821b52103358250804';
                        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Saint-Petersburg&lang=ru`);
                        if (!response.ok) throw new Error('Ошибка получения данных');
                        const data = await response.json();
                        onDataLoaded(data);
                        setError(null);
                    } catch (err) {
                        setError('Не удалось получить данные о погоде');
                        console.error(err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["FetchWeather.useEffect.fetchWeather"];
            fetchWeather();
        }
    }["FetchWeather.useEffect"], [
        onDataLoaded
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Загрузка..."
    }, void 0, false, {
        fileName: "[project]/src/app/(opened)/LandingPage/components/FetchWeather/FetchWeather.tsx",
        lineNumber: 55,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/(opened)/LandingPage/components/FetchWeather/FetchWeather.tsx",
        lineNumber: 56,
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
"[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "DisplayWeather-module__tlBmTW__container",
  "feelsLike": "DisplayWeather-module__tlBmTW__feelsLike",
  "temperature": "DisplayWeather-module__tlBmTW__temperature",
  "title": "DisplayWeather-module__tlBmTW__title",
  "weatherIcon": "DisplayWeather-module__tlBmTW__weatherIcon",
  "weatherInfo": "DisplayWeather-module__tlBmTW__weatherInfo",
});
}}),
"[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$FetchWeather$2f$FetchWeather$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(opened)/LandingPage/components/FetchWeather/FetchWeather.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DisplayWeather = ()=>{
    _s();
    const [weatherData, setWeatherData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$FetchWeather$2f$FetchWeather$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onDataLoaded: (data)=>setWeatherData(data)
            }, void 0, false, {
                fileName: "[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            weatherData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weatherInfo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: weatherData.location.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].temperature,
                        children: [
                            "Температура: ",
                            weatherData.current.temp_c,
                            "°C"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].feelsLike,
                        children: [
                            "Ощущается как: ",
                            weatherData.current.feelslike_c,
                            "°C"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$opened$292f$LandingPage$2f$components$2f$DisplayWeather$2f$DisplayWeather$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].weatherIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: `https:${weatherData.current.condition.icon}`,
                            alt: weatherData.current.condition.text,
                            width: 64,
                            height: 64,
                            quality: 80,
                            loading: "lazy"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(opened)/LandingPage/components/DisplayWeather/DisplayWeather.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
_s(DisplayWeather, "bz3WTkv9WK5s51p29VvW+nOlOFM=");
_c = DisplayWeather;
const __TURBOPACK__default__export__ = DisplayWeather;
var _c;
__turbopack_context__.k.register(_c, "DisplayWeather");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(opened)/LandingPage/LaindingPage.tsx [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/(opened)/LandingPage/LaindingPage.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
}]);

//# sourceMappingURL=src_app_%28opened%29_LandingPage_bb7fa91b._.js.map