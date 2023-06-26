
var videos = [
    {url:'https://www.youtube.com/embed/Bp1znTeP6jA',
    title: 'Aprendamos junt@s a calcular el consumo eléctrico'},
    {url:'https://www.youtube.com/embed/fk63DRu7O0E',
    title: 'Mantengamos nuestros hogares seguros y sin riesgos eléctricos'},
    {url:'https://www.youtube.com/embed/9924l-NxVgA',
    title: 'Evitemos fugas eléctricas en casa'},
    {url:'https://www.youtube.com/embed/cCBoHRza9v0',
    title: 'Aprendamos a usar las herramientas digitales'},
    {url:'https://www.youtube.com/embed/iQv2jMdl4ic',
    title: 'Conozcamos los conceptos de nuestro recibo de luz'},
    {url:'https://www.youtube.com/embed/O-9yKQM2Jb4',
    title: 'Conozcamos cómo funciona el sistema de alumbrado público'},
    {url:'https://www.youtube.com/embed/2Y6mMFOraPA',
    title: 'Ahorremos energía en casa'},
  ];
  
  var indices = [0,1,2,3,4,5,6];
  
  function nextVideo() {
    if (indices.length == 0) {
      indices = [0,1,2,3,4,5,6];
    }
    
    var prevIndex = localStorage.getItem('index');
    
    var index = Math.floor(Math.random() * indices.length);
    
    while (index == prevIndex) {
      index = Math.floor(Math.random() * indices.length);
    }
    
    localStorage.setItem('index', index);
    
    var video = videos[indices[index]];
    
    indices.splice(index,1);
    
    document.getElementById('video').src = video.url;
    document.getElementById('video-title').innerHTML = video.title;
  }
  
  nextVideo();
  
  function playNextVideo() {
      if (indices.length == 0) {
          indices = [0,1,2,3,4,5,6];
      }
      
      var index = indices.shift();
      
      var video = videos[index];
      
      document.getElementById('video').src = video.url;
      document.getElementById('video-title').innerHTML = video.title;
  }
  
  document.getElementById('video').addEventListener('ended', playNextVideo);
  

  const tips = [
    "Aprovecha la luz natural. Apaga las luces durante el día y abre las cortinas para aprovechar la luz natural.",
    "Usa focos de bajo consumo. Los focos de bajo consumo son una excelente opción para ahorrar energía.",
    "Desconecta los aparatos que no se usen. Aunque no lo creas, los aparatos electrónicos consumen energía aunque no estén en uso.",
    "Revisa los electrodomésticos. Mantén tus electrodomésticos en buen estado para evitar fugas de energía.",
    "Gradúa el termostato. Gradúa el termostato a 20 ºC como máximo en calefacción y equipos de aire acondicionado.",
    "Emplea la lavadora con carga completa. Ahorra agua y electricidad empleando la lavadora con carga completa.",
    "Usa tapas en las sartenes y ollas. Tapa las sartenes y ollas al cocinar para aprovechar el calor residual.",
    "Aprovecha el calor residual del horno y vitro. Apaga el horno o vitro antes de terminar la cocción para aprovechar el calor residual.",
    "Da solo la carga necesaria a los aparatos. No sobrecargues tus aparatos electrónicos, dales solo la carga necesaria.",
    "Usa un ventilador en lugar del aire acondicionado. Un ventilador consume menos energía que un aire acondicionado.",
    "Usa una regleta eléctrica. Conecta varios aparatos electrónicos en una sola regleta eléctrica para ahorrar energía.",
    "Usa una ducha en lugar de una bañera. Una ducha consume menos agua y energía que una bañera.",
    "Usa cortinas térmicas. Las cortinas térmicas ayudan a mantener la temperatura del hogar sin necesidad de usar calefacción o aire acondicionado.",
    "Usa electrodomésticos eficientes. Los electrodomésticos eficientes consumen menos energía que los convencionales.",
    "Usa paneles solares. Los paneles solares son una excelente opción para ahorrar energía y reducir la huella de carbono.",
    "Usa bombillas LED. Las bombillas LED consumen menos energía que las bombillas convencionales.",
    "Usa un calentador solar. Un calentador solar es una excelente opción para ahorrar energía en el hogar.",
    "Usa un horno tostador en lugar del horno convencional. Un horno tostador consume menos energía que un horno convencional.",
    "Usa un secador de cabello eficiente. Los secadores de cabello eficientes consumen menos energía que los convencionales.",
    "Usa un cargador solar para tus dispositivos móviles. Un cargador solar es una excelente opción para cargar tus dispositivos móviles sin gastar electricidad."
  ];
  
  tips.sort(() => Math.random() - Math.random());
  
  for (let i = 0; i < 4; i++) {
      document.getElementById(`titulo${i}`).innerHTML = tips[i].split(".")[0];
      document.getElementById(`tip${i}`).innerHTML = tips[i].split(".")[1];
  }