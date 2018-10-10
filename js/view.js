window.addEventListener("load", function () {

    "use strict";

    var view = document.getElementById("view");

    var w = view.clientWidth, h = view.clientHeight;

	 // view 세팅 설정 -------------------
    var renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });   //WebGL 렌더러 생성자 생성
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(w, h, false); //사이즈 설정(width, height)
    //renderer.setSize(1280, 720, false);
    renderer.localClippingEnabled = true;
    view.appendChild(renderer.domElement);  //view 화면에 보여줄 렌더러를 생성 document.body.appendChild( renderer.domElement );

    var camera = new THREE.PerspectiveCamera(45, w / h, 1, 1000);   // 카메라 세팅 (카메라의 시야각, 시야의 가로세로비, 렌더링 할 물체 거리의 하한값, 렌더링 할 물체 거리의 상한값)
    camera.position.set(49.99999999999999,250.8528137423857,50.000000000000014);
    //camera.position.set(0, 300, 20);
    camera.up.set(0,0,1);
    //camera.position.z = 405.8548399691993;

    //var controls = new THREE.TrackballControls(camera, view)
    var controls = new THREE.OrbitControls(camera, view);
    //controls.target.set(0,0,90);
    controls.noKeys = true;
    var scene = new THREE.Scene();  // view 화면 설정을 위한 생성자 생성
    //scene.add(new THREE.AmbientLight(0xffffff));    //주변의 빛 설정

    var light1 = new THREE.DirectionalLight(0xffffff);  //1번쩨 빛의 방향 설정
    light1.position.set(0, 100, 100);
    scene.add(light1);

    var light2 = new THREE.DirectionalLight(0xffffff);  //2번쩨 빛의 방향 설정
    light2.position.set(0, -100, -100);
    scene.add(light2);

	var axes = new THREE.AxisHelper(20);

	var x = 120; /*216.9600067138672;*/
	var y = 60; /*135.6000061035156;*/

	var wb = 120;
	var hb = 67;

	var geometry = new THREE.BoxGeometry( wb, hb, 100 );
	var material = new THREE.MeshBasicMaterial( {color: 0xaaaaaa, transparent: true, opacity: 0.2} );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.z += 50;

	scene.add(cube);

	var gnd_geom= new THREE.PlaneGeometry( 400, 400, 40, 40);
	var gnd_mat = [];
    gnd_mat.push( new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.FrontSide, transparent: true }) );
    gnd_mat.push( new THREE.MeshBasicMaterial( { color: 0xaaaaaa, side: THREE.FrontSide, transparent: true }) );


    var num = gnd_geom.faces.length / 2;
    for( var i = 0; i < num; i ++ ) {

        gnd_geom.faces[ i * 2 ].materialIndex = ((i + Math.floor(i/40)) % 2);
        gnd_geom.faces[ i * 2 + 1 ].materialIndex = ((i + Math.floor(i/40)) % 2);
    }

    var gnd_clip_planes = [];
    gnd_clip_planes.push(new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), wb/2 ));
    gnd_clip_planes.push(new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), wb/2 ));
    gnd_clip_planes.push(new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), hb/2 ));
    gnd_clip_planes.push(new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), hb/2 ));

    gnd_mat[0].clippingPlanes = gnd_clip_planes;
    gnd_mat[1].clippingPlanes = gnd_clip_planes;

    scene.add(new THREE.Mesh(gnd_geom, gnd_mat));

    var line_geom = new THREE.Geometry();
    line_geom.vertices.push(
        new THREE.Vector3(- wb/2, hb/2, 0),
        new THREE.Vector3( wb/2, hb/2, 0),
        new THREE.Vector3( wb/2, - hb/2, 0),
        new THREE.Vector3(- wb/2, - hb/2, 0),
        new THREE.Vector3(- wb/2, hb/2, 0)
    );

    var line_geom1 = new THREE.Geometry();
    line_geom1.vertices.push(
    	new THREE.Vector3(- wb/2, hb/2, 0),
    	new THREE.Vector3(- wb/2, -hb/2, 0),
    	new THREE.Vector3(- wb/2, -hb/2, 100),
    	new THREE.Vector3(- wb/2, hb/2, 100),
    	new THREE.Vector3(- wb/2, hb/2, 0)
    );

    var line_geom2 = new THREE.Geometry();
    line_geom2.vertices.push(
    	new THREE.Vector3(- wb/2, hb/2, 100),
    	new THREE.Vector3( wb/2, hb/2, 100),
    	new THREE.Vector3( wb/2, -hb/2, 100),
    	new THREE.Vector3(- wb/2, -hb/2, 100),
    	new THREE.Vector3(- wb/2, hb/2, 100)
    );

    var line_geom3 = new THREE.Geometry();
    line_geom3.vertices.push(
    	new THREE.Vector3( wb/2, hb/2, 0),
    	new THREE.Vector3( wb/2, -hb/2, 0),
    	new THREE.Vector3( wb/2, -hb/2, 100),
    	new THREE.Vector3( wb/2, hb/2, 100),
    	new THREE.Vector3( wb/2, hb/2, 0)
    );

    var line_mat = new THREE.LineBasicMaterial({color: 0});
    var gnd_line = new THREE.Line(line_geom, line_mat);

    scene.add(gnd_line);
    scene.add(new THREE.Line(line_geom1, line_mat));
    scene.add(new THREE.Line(line_geom2, line_mat));
    scene.add(new THREE.Line(line_geom3, line_mat));

	scene.add(axes);


    $(window).resize(function(){
        camera.aspect = view.clientWidth / view.clientHeight;
        camera.updateProjectionMatrix();
        w = view.clientWidth;
        h = view.clientHeight;
        renderer.setSize(view.clientWidth, view.clientHeight);
    });

     var loop = function() {
        requestAnimationFrame(loop);
        controls.update();
        renderer.clear();
        renderer.render(scene, camera);
    };
    loop();

    view.addEventListener("dragover", function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
    }, false);

    view.addEventListener("drop", function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        var file = ev.dataTransfer.files[0];
        openFile(file);
    }, false);


}, false);
