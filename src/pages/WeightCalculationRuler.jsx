import React, { useState } from "react";

const WeightCalculationRuler = () => {
  // -- Malzeme listesi --
  const materials = [
    { name: "Demir", density: "7.86g/cm³" },
    { name: "DKP Sac", density: "8g/cm³" },
    { name: "Paslanmaz Çelik", density: "7.95g/cm³" },
    { name: "Bakır", density: "8.96g/cm³" },
    { name: "Pirinc", density: "8.55g/cm³" },
    { name: "Döküm Çelik", density: "7.2g/cm³" },
    { name: "Alüminyum", density: "2.72g/cm³" },
    { name: "Bronz", density: "8.8g/cm³" },
    { name: "Krom", density: "7.1g/cm³" },
    { name: "Altın", density: "19.36g/cm³" },
    { name: "Gümüş", density: "10.5g/cm³" },
  ];

  // -- Ürün tipleri (sekme başlıkları) --
  const productTypes = ["Sac", "Boru", "Kutu", "Kare", "Köşebent", "Lama", "Çubuk"];

  // -- Hangi sekme seçili --
  const [selectedProductType, setSelectedProductType] = useState("Sac");

  // -- Seçilen materyal --
  const [selectedMaterial, setSelectedMaterial] = useState("");

  // -- "Önceki hesaplamalar" için her şekle ait ayrı state tutalım --
  const [sacHistory, setSacHistory] = useState([]);
  const [boruHistory, setBoruHistory] = useState([]);
  const [kutuHistory, setKutuHistory] = useState([]);
  const [kareHistory, setKareHistory] = useState([]);
  const [kosebentHistory, setKosebentHistory] = useState([]);
  const [lamaHistory, setLamaHistory] = useState([]);
  const [cubukHistory, setCubukHistory] = useState([]);

  // -- Sekmelerde kullanılacak form verileri --
  const [sacData, setSacData] = useState({ thickness: "", width: "", length: "" });
  const [boruData, setBoruData] = useState({ diameter: "", thickness: "", length: "" });
  const [kutuData, setKutuData] = useState({ h: "", w: "", t: "", length: "" });
  const [kareData, setKareData] = useState({ side: "", length: "" });
  const [kosebentData, setKosebentData] = useState({ t: "", L1: "", L2: "", length: "" });
  const [lamaData, setLamaData] = useState({ a: "", b: "", length: "" });
  const [cubukData, setCubukData] = useState({ d: "", length: "" });

  // Yoğunluk parse etme yardımcı fonksiyonu
  const getDensityValue = () => {
    if (!selectedMaterial) return 0;
    const matObj = materials.find((m) => m.name === selectedMaterial);
    if (!matObj) return 0;
    return parseFloat(matObj.density); // "7.86g/cm³" => 7.86
  };

  // -- Hesaplamayı yapan fonksiyon --
  const handleCalculate = () => {
    if (!selectedMaterial) {
      alert("Lütfen bir materyal seçiniz!");
      return;
    }
    const density = getDensityValue(); // g/cm³

    let volumeCm3 = 0;

    switch (selectedProductType) {
      // 1) Sac
      case "Sac": {
        const { thickness, width, length } = sacData;
        const t = parseFloat(thickness) / 10;  // mm -> cm
        const w = parseFloat(width) / 10;
        const l = parseFloat(length) / 10;

        if (isNaN(t) || isNaN(w) || isNaN(l)) {
          alert("Lütfen geçerli sayılar girin.");
          return;
        }

        // Dikdörtgen prizma hacmi
        volumeCm3 = t * w * l;
        // Ağırlık
        const weight = (volumeCm3 * density) / 1000; // gr -> kg

        // Kaydet
        setSacHistory((prev) => [
          ...prev,
          {
            thickness,
            width,
            length,
            density,
            weight: weight.toFixed(3),
          },
        ]);
        break;
      }

      // 2) Boru
      case "Boru": {
        const { diameter, thickness, length } = boruData;
        const d = parseFloat(diameter);
        const t = parseFloat(thickness);
        const L = parseFloat(length);

        if (isNaN(d) || isNaN(t) || isNaN(L)) {
          alert("Lütfen geçerli sayılar girin.");
          return;
        }

        // İç çap = d - 2t
        const innerD = d - 2 * t;
        if (innerD < 0) {
          alert("Et kalınlığı (t) çap değerini aşamaz!");
          return;
        }

        // mm -> cm
        const outerRadius = (d / 2) / 10;
        const innerRadius = (innerD / 2) / 10;
        const lengthCm = L / 10;

        // Kesit alanı (cm²)
        const crossSection = Math.PI * (outerRadius ** 2 - innerRadius ** 2);
        // Hacim (cm³)
        volumeCm3 = crossSection * lengthCm;
        // Ağırlık (kg)
        const weight = (volumeCm3 * density) / 1000;

        // Kaydet
        setBoruHistory((prev) => [
          ...prev,
          {
            diameter,
            thickness,
            length,
            density,
            weight: weight.toFixed(3),
          },
        ]);
        break;
      }

      // 3) Kutu (dikdörtgen kesitli profil)
      case "Kutu": {
        const { h, w, t, length } = kutuData;
        const H = parseFloat(h);
        const W = parseFloat(w);
        const T = parseFloat(t);
        const L = parseFloat(length);

        if (isNaN(H) || isNaN(W) || isNaN(T) || isNaN(L)) {
          alert("Lütfen geçerli sayılar girin.");
          return;
        }

        // İç kısım = (h - 2t) * (w - 2t)
        const innerH = H - 2 * T;
        const innerW = W - 2 * T;
        if (innerH < 0 || innerW < 0) {
          alert("Kalınlık, yükseklik/genişlikten büyük olamaz!");
          return;
        }

        // mm -> cm
        const outerArea = (H / 10) * (W / 10); // cm²
        const innerArea = (innerH / 10) * (innerW / 10); // cm²
        const crossSection = outerArea - innerArea; // cm²
        const lengthCm = L / 10; // cm

        volumeCm3 = crossSection * lengthCm;
        const weight = (volumeCm3 * density) / 1000;

        setKutuHistory((prev) => [
          ...prev,
          {
            h,
            w,
            t,
            length,
            density,
            weight: weight.toFixed(3),
          },
        ]);
        break;
      }

      // 4) Kare (katı kare profil)
      case "Kare": {
        const { side, length } = kareData;
        const s = parseFloat(side);
        const L = parseFloat(length);

        if (isNaN(s) || isNaN(L)) {
          alert("Lütfen geçerli sayılar girin.");
          return;
        }

        // mm -> cm
        const sCm = s / 10;
        const lCm = L / 10;
        // Kesit alanı = s^2
        const crossSection = sCm * sCm;
        // Hacim = kesit alanı * uzunluk
        volumeCm3 = crossSection * lCm;
        const weight = (volumeCm3 * density) / 1000;

        setKareHistory((prev) => [
          ...prev,
          {
            side,
            length,
            density,
            weight: weight.toFixed(3),
          },
        ]);
        break;
      }

      // 5) Köşebent (L profili)
      case "Köşebent": {
        const { t, L1, L2, length } = kosebentData;
        const T = parseFloat(t);
        const L_1 = parseFloat(L1);
        const L_2 = parseFloat(L2);
        const Lng = parseFloat(length);

        if (isNaN(T) || isNaN(L_1) || isNaN(L_2) || isNaN(Lng)) {
          alert("Lütfen geçerli sayılar girin.");
          return;
        }

        // L kesit alanı = t*L1 + t*L2 - t*t
        // mm -> cm
        const tCm = T / 10;
        const L1Cm = L_1 / 10;
        const L2Cm = L_2 / 10;
        const lengthCm = Lng / 10;

        // cm²
        const crossSection = (L1Cm * tCm) + (L2Cm * tCm) - (tCm * tCm);
        volumeCm3 = crossSection * lengthCm;
        const weight = (volumeCm3 * density) / 1000;

        setKosebentHistory((prev) => [
          ...prev,
          {
            t,
            L1,
            L2,
            length,
            density,
            weight: weight.toFixed(3),
          },
        ]);
        break;
      }

      // 6) Lama (düz lama - dikdörtgen kesit)
      case "Lama": {
        const { a, b, length } = lamaData;
        const A = parseFloat(a);
        const B = parseFloat(b);
        const L = parseFloat(length);

        if (isNaN(A) || isNaN(B) || isNaN(L)) {
          alert("Lütfen geçerli sayılar girin.");
          return;
        }

        // mm -> cm
        const aCm = A / 10;
        const bCm = B / 10;
        const lCm = L / 10;

        // Hacim = aCm * bCm * lCm
        volumeCm3 = aCm * bCm * lCm;
        const weight = (volumeCm3 * density) / 1000;

        setLamaHistory((prev) => [
          ...prev,
          {
            a,
            b,
            length,
            density,
            weight: weight.toFixed(3),
          },
        ]);
        break;
      }

      // 7) Çubuk (yuvarlak çubuk)
      case "Çubuk": {
        const { d, length } = cubukData;
        const D = parseFloat(d);
        const L = parseFloat(length);

        if (isNaN(D) || isNaN(L)) {
          alert("Lütfen geçerli sayılar girin.");
          return;
        }

        // mm -> cm
        const radiusCm = (D / 2) / 10;
        const lengthCm = L / 10;

        const crossSection = Math.PI * (radiusCm ** 2);
        volumeCm3 = crossSection * lengthCm;
        const weight = (volumeCm3 * density) / 1000;

        setCubukHistory((prev) => [
          ...prev,
          {
            d,
            length,
            density,
            weight: weight.toFixed(3),
          },
        ]);
        break;
      }

      default:
        break;
    }
  };

  // -- Her sekmenin kendine özel inputları (resim dahil) --
  const renderInputs = () => {
    switch (selectedProductType) {
      case "Sac":
        return (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Resim veya ikon */}
            <img src="https://via.placeholder.com/150x100?text=Sac" alt="Sac" className="max-w-full" />
            {/* Form alanları */}
            <div>
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Kalınlık (mm)"
                value={sacData.thickness}
                onChange={(e) => setSacData({ ...sacData, thickness: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Genişlik (mm)"
                value={sacData.width}
                onChange={(e) => setSacData({ ...sacData, width: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full"
                type="number"
                placeholder="Uzunluk (mm)"
                value={sacData.length}
                onChange={(e) => setSacData({ ...sacData, length: e.target.value })}
              />
            </div>
          </div>
        );

      case "Boru":
        return (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/150x100?text=Boru" alt="Boru" />
            <div>
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Dış Çap (mm)"
                value={boruData.diameter}
                onChange={(e) => setBoruData({ ...boruData, diameter: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Et Kalınlığı (mm)"
                value={boruData.thickness}
                onChange={(e) => setBoruData({ ...boruData, thickness: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full"
                type="number"
                placeholder="Uzunluk (mm)"
                value={boruData.length}
                onChange={(e) => setBoruData({ ...boruData, length: e.target.value })}
              />
            </div>
          </div>
        );

      case "Kutu":
        return (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/150x100?text=Kutu" alt="Kutu" />
            <div>
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Yükseklik (h, mm)"
                value={kutuData.h}
                onChange={(e) => setKutuData({ ...kutuData, h: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Genişlik (w, mm)"
                value={kutuData.w}
                onChange={(e) => setKutuData({ ...kutuData, w: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Kalınlık (t, mm)"
                value={kutuData.t}
                onChange={(e) => setKutuData({ ...kutuData, t: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full"
                type="number"
                placeholder="Uzunluk (mm)"
                value={kutuData.length}
                onChange={(e) => setKutuData({ ...kutuData, length: e.target.value })}
              />
            </div>
          </div>
        );

      case "Kare":
        return (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/150x100?text=Kare" alt="Kare" />
            <div>
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Kare Kenar (mm)"
                value={kareData.side}
                onChange={(e) => setKareData({ ...kareData, side: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full"
                type="number"
                placeholder="Uzunluk (mm)"
                value={kareData.length}
                onChange={(e) => setKareData({ ...kareData, length: e.target.value })}
              />
            </div>
          </div>
        );

      case "Köşebent":
        return (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/150x100?text=Köşebent" alt="Köşebent" />
            <div>
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Kalınlık (t, mm)"
                value={kosebentData.t}
                onChange={(e) => setKosebentData({ ...kosebentData, t: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Yükseklik (L1, mm)"
                value={kosebentData.L1}
                onChange={(e) => setKosebentData({ ...kosebentData, L1: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Genişlik (L2, mm)"
                value={kosebentData.L2}
                onChange={(e) => setKosebentData({ ...kosebentData, L2: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full"
                type="number"
                placeholder="Uzunluk (mm)"
                value={kosebentData.length}
                onChange={(e) => setKosebentData({ ...kosebentData, length: e.target.value })}
              />
            </div>
          </div>
        );

      case "Lama":
        return (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/150x100?text=Lama" alt="Lama" />
            <div>
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Kalınlık (a, mm)"
                value={lamaData.a}
                onChange={(e) => setLamaData({ ...lamaData, a: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Genişlik (b, mm)"
                value={lamaData.b}
                onChange={(e) => setLamaData({ ...lamaData, b: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full"
                type="number"
                placeholder="Uzunluk (mm)"
                value={lamaData.length}
                onChange={(e) => setLamaData({ ...lamaData, length: e.target.value })}
              />
            </div>
          </div>
        );

      case "Çubuk":
        return (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="https://via.placeholder.com/150x100?text=Çubuk" alt="Çubuk" />
            <div>
              <input
                className="p-2 border rounded w-full mb-2"
                type="number"
                placeholder="Çap (d, mm)"
                value={cubukData.d}
                onChange={(e) => setCubukData({ ...cubukData, d: e.target.value })}
              />
              <input
                className="p-2 border rounded w-full"
                type="number"
                placeholder="Uzunluk (mm)"
                value={cubukData.length}
                onChange={(e) => setCubukData({ ...cubukData, length: e.target.value })}
              />
            </div>
          </div>
        );

      default:
        return <div className="mt-4">Henüz tanımlanmadı.</div>;
    }
  };

  // -- "Önceki Hesaplamalar" tablosu: seçili sekmeye göre gösterilecek --
  const renderHistoryTable = () => {
    switch (selectedProductType) {
      case "Sac":
        return (
          <table className="min-w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Kalınlık (mm)</th>
                <th className="p-2 border">Genişlik (mm)</th>
                <th className="p-2 border">Uzunluk (mm)</th>
                <th className="p-2 border">Yoğunluk (g/cm³)</th>
                <th className="p-2 border">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody>
              {sacHistory.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-2">
                    Henüz hiç hesaplama yapılmadı.
                  </td>
                </tr>
              )}
              {sacHistory.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border">{item.thickness}</td>
                  <td className="p-2 border">{item.width}</td>
                  <td className="p-2 border">{item.length}</td>
                  <td className="p-2 border">{item.density}</td>
                  <td className="p-2 border">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "Boru":
        return (
          <table className="min-w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Dış Çap (mm)</th>
                <th className="p-2 border">Et Kalınlığı (mm)</th>
                <th className="p-2 border">Uzunluk (mm)</th>
                <th className="p-2 border">Yoğunluk</th>
                <th className="p-2 border">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody>
              {boruHistory.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-2">
                    Henüz hiç hesaplama yapılmadı.
                  </td>
                </tr>
              )}
              {boruHistory.map((item, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{item.diameter}</td>
                  <td className="p-2 border">{item.thickness}</td>
                  <td className="p-2 border">{item.length}</td>
                  <td className="p-2 border">{item.density}</td>
                  <td className="p-2 border">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "Kutu":
        return (
          <table className="min-w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Yükseklik (mm)</th>
                <th className="p-2 border">Genişlik (mm)</th>
                <th className="p-2 border">Kalınlık (mm)</th>
                <th className="p-2 border">Uzunluk (mm)</th>
                <th className="p-2 border">Yoğunluk</th>
                <th className="p-2 border">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody>
              {kutuHistory.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-2">
                    Henüz hiç hesaplama yapılmadı.
                  </td>
                </tr>
              )}
              {kutuHistory.map((item, i) => (
                <tr key={i}>
                  <td className="p-2 border">{item.h}</td>
                  <td className="p-2 border">{item.w}</td>
                  <td className="p-2 border">{item.t}</td>
                  <td className="p-2 border">{item.length}</td>
                  <td className="p-2 border">{item.density}</td>
                  <td className="p-2 border">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "Kare":
        return (
          <table className="min-w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Kenar (mm)</th>
                <th className="p-2 border">Uzunluk (mm)</th>
                <th className="p-2 border">Yoğunluk</th>
                <th className="p-2 border">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody>
              {kareHistory.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-2">
                    Henüz hiç hesaplama yapılmadı.
                  </td>
                </tr>
              )}
              {kareHistory.map((item, i) => (
                <tr key={i}>
                  <td className="p-2 border">{item.side}</td>
                  <td className="p-2 border">{item.length}</td>
                  <td className="p-2 border">{item.density}</td>
                  <td className="p-2 border">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "Köşebent":
        return (
          <table className="min-w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Kalınlık (mm)</th>
                <th className="p-2 border">Yükseklik L1 (mm)</th>
                <th className="p-2 border">Genişlik L2 (mm)</th>
                <th className="p-2 border">Uzunluk (mm)</th>
                <th className="p-2 border">Yoğunluk</th>
                <th className="p-2 border">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody>
              {kosebentHistory.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center p-2">
                    Henüz hiç hesaplama yapılmadı.
                  </td>
                </tr>
              )}
              {kosebentHistory.map((item, i) => (
                <tr key={i}>
                  <td className="p-2 border">{item.t}</td>
                  <td className="p-2 border">{item.L1}</td>
                  <td className="p-2 border">{item.L2}</td>
                  <td className="p-2 border">{item.length}</td>
                  <td className="p-2 border">{item.density}</td>
                  <td className="p-2 border">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "Lama":
        return (
          <table className="min-w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Kalınlık (mm)</th>
                <th className="p-2 border">Genişlik (mm)</th>
                <th className="p-2 border">Uzunluk (mm)</th>
                <th className="p-2 border">Yoğunluk</th>
                <th className="p-2 border">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody>
              {lamaHistory.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-2">
                    Henüz hiç hesaplama yapılmadı.
                  </td>
                </tr>
              )}
              {lamaHistory.map((item, i) => (
                <tr key={i}>
                  <td className="p-2 border">{item.a}</td>
                  <td className="p-2 border">{item.b}</td>
                  <td className="p-2 border">{item.length}</td>
                  <td className="p-2 border">{item.density}</td>
                  <td className="p-2 border">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case "Çubuk":
        return (
          <table className="min-w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Çap (mm)</th>
                <th className="p-2 border">Uzunluk (mm)</th>
                <th className="p-2 border">Yoğunluk</th>
                <th className="p-2 border">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody>
              {cubukHistory.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-2">
                    Henüz hiç hesaplama yapılmadı.
                  </td>
                </tr>
              )}
              {cubukHistory.map((item, i) => (
                <tr key={i}>
                  <td className="p-2 border">{item.d}</td>
                  <td className="p-2 border">{item.length}</td>
                  <td className="p-2 border">{item.density}</td>
                  <td className="p-2 border">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">Ağırlık Hesaplama Cetveli</h2>

      {/* Sekme butonları */}
      <div className="flex gap-4 overflow-x-auto">
        {productTypes.map((type) => (
          <button
            key={type}
            className={`p-3 rounded-full text-white font-bold ${
              selectedProductType === type ? "bg-teal-900" : "bg-teal-700"
            }`}
            onClick={() => setSelectedProductType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Malzeme seçimi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <select
          className="p-2 border rounded"
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
        >
          <option value="">Materyal Seçiniz</option>
          {materials.map((mat) => (
            <option key={mat.name} value={mat.name}>
              {mat.name} ({mat.density})
            </option>
          ))}
        </select>
      </div>

      {/* Şekle göre inputlar + resim */}
      {renderInputs()}

      {/* Hesapla Butonu */}
      <button
        className="mt-4 bg-teal-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleCalculate}
      >
        Hesapla
      </button>

      {/* "Önceki Hesaplamalar" tablosu */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Önceki Hesaplamalar</h3>
        {renderHistoryTable()}
      </div>
    </div>
  );
};

export default WeightCalculationRuler;
