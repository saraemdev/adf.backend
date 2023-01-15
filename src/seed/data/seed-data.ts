interface SeedUser {
  email: string;
  password: string;
  fullName: string;
  roles: string[];
}

interface SeedAgency {
  title: string;
  img: string;
}

interface SeedProduct {
  title: string;
  description: string;
  details: string;
  phone: string;
  url: string;
  isActive: boolean;
}

interface SeedData {
  users: SeedUser[];
  agencies: SeedAgency[];
  procedures: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'admin@google.com',
      password: '***',
      fullName: 'Admin',
      roles: ['admin'],
    },
    {
      email: 'crossuser@google.com',
      password: '***',
      fullName: 'Crossuser',
      roles: ['crossuser'],
    },
    {
      email: 'superuser@google.com',
      password: '***',
      fullName: 'Superuser',
      roles: ['superuser'],
    },
    {
      email: 'user@google.com',
      password: '***',
      fullName: 'User',
      roles: ['user'],
    },
  ],

  agencies: [
    {
      title: 'UOC',
      img: 'http://localhost:3000/api/files/fb2f97e7-4e96-4aab-b8e5-39a4afec5592.png',
    },
    {
      title: 'Agencia Tributaria',
      img: 'http://localhost:3000/api/files/a3b8850e-f8e6-4810-8871-a6402d36cda8.png',
    },
    {
      title: 'Ayuntamiento',
      img: 'http://localhost:3000/api/files/13441527-aaf9-41b4-8803-c7131c765e43.png',
    },
    {
      title: 'DGT',
      img: 'http://localhost:3000/api/files/61800605-26a8-4b79-8de4-34ec0b29acbb.png',
    },
    {
      title: 'ECYL',
      img: 'http://localhost:3000/api/files/840259f0-9461-4757-8a11-8568c3107853.png',
    },
    {
      title: 'INSS',
      img: 'http://localhost:3000/api/files/66961033-2ade-4069-a334-f5c683220d2b.png',
    },
    {
      title: 'Junta CyL',
      img: 'http://localhost:3000/api/files/881f038a-4a4b-46bc-88b4-37c9a442fce9.png',
    },
    {
      title: 'Policía Nacional',
      img: 'http://localhost:3000/api/files/a3e1ac0b-a4c9-4d80-a25d-306bd5820fef.png',
    },
    {
      title: 'Sacyl',
      img: 'http://localhost:3000/api/files/79252cbe-3afd-4aeb-b052-f0c0eed8579e.png',
    },
    {
      title: 'SEPE',
      img: 'http://localhost:3000/api/files/d57a12ba-37c7-406a-a809-43312dbf42a3.png',
    },
  ],

  procedures: [
    {
      title: 'Acceso al repositorio O2',
      description:
        'Acceso al portal institucional de la Universidad que recoge, difunde y preserva las publicaciones digitales de acceso abierto a la comunidad UOC',
      details:
        'No requiere identificación para acceder al contenido. Puede consultarse y descargarse toda la información siguiendo las normas que establece para su uso la UOC y las licencias de autoría de cada trabajo',
      phone: '934 817 272',
      url: 'https://openaccess.uoc.edu',
      isActive: true,
    },
    {
      title: 'Solicitud del carné de estudiante',
      description:
        'El carné de estudiante es anual y se renueva automáticamente mientras se cumplen los requisitos, si no lo recibes por correo postal, puedes solicitar un duplicado',
      details:
        'Necesitas tener un perfil de estudiante de la universidad y acceder al campus con tu usuario y contraseña. Accede al apartado Personal > Información Personal > Carné de estudiante',
      phone: 'Sin servicio telefónico',
      url: 'http://cv.uoc.edu/webapps/campus/estudiant/estudiant/acollida/es/institucional/pindoles/carnet_uoc.html',
      isActive: true,
    },
    {
      title: 'Solicitud de cita previa',
      description: 'Solicitar cita previa con la Agencia Tributaria',
      details: 'Necesitas el NIF o NIE',
      phone: '901 200 351 | 912 901 340',
      url: 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GC29.shtml',
      isActive: true,
    },
    {
      title: 'Recuperación de la contraseña de Cl@ve ',
      description:
        'Servicio para ciudadanos dados de alta en Cl@ve permanente que hayan olvidado su contraseña o haya sido bloqueada por intentos fallidos',
      details:
        'Necesitas el NIF o NIE, una dirección de correo electrónico y el código de activación del documento de Cl@ve',
      phone: 'Sin servicio disponible en este momento',
      url: 'https://w6.seg-social.es/ProsaInternetAnonimo/OnlineAccess?ARQ.IDAPP=SIUC0002&ARQ.SPM.ACTION=LOGIN&ARQ.SPM.APPTYPE=SERVICE',
      isActive: true,
    },
    {
      title: 'Solicitud de carné para las bibliotecas públicas',
      description:
        'Con la tarjeta de usuario del Sistema de bibliotecas de Castilla y León podrás acceder a los servicios de todas las bibliotecas de la red regional. En la misma página puedes solicitar un duplicado, modificar tus datos o darse de baja como usuario',
      details:
        'Puedes acceder con o sin certificado digital. Certificados permitidos: FNMT, Camerfirma, DNI, FirmaProfesional, Ancert y ACA',
      phone: '012 | 983 327 850',
      url: 'https://servicios.jcyl.es/tabi/TABILoginAplicacion.do?accion=inicio',
      isActive: true,
    },
    {
      title: 'Subvenciones para alquiler de locales de ensayo',
      description:
        'Presentar la solicitud para acceder a las subvenciones para el alquiler de locales de ensayo para grupos y artistas de la ciudad y la comarca inscritos en el registro de asociaciones municipal',
      details:
        'Necesitas certificado digital y firma electrónica. Documentación requerida: Solicitud de subvención del Ayuntamiento y la documentación solicitada en las bases',
      phone: '947 500 100',
      url: 'https://sede.arandadeduero.es/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=CATALOGO',
      isActive: false,
    },
    {
      title: 'Consulta el distintivo ambiental de tu vehículo',
      description:
        'Conoce qué condiciones medio ambientales tienen tus vehículos',
      details: 'Necesitas conocer la matrícula del vehículo',
      phone: '060',
      url: 'https://sede.dgt.gob.es/es/vehiculos/distintivo-ambiental/',
      isActive: true,
    },
    {
      title: 'Consulta de los puntos de conducir',
      description:
        'Conoce el saldo de puntos que tienes en tu carné de conducir',
      details:
        'Puedes acceder con certificado digital, DNIe, Cl@ve o registrándote con el NIF',
      phone: '060',
      url: 'https://sede.dgt.gob.es/es/permisos-de-conducir/consulta-tus-puntos/',
      isActive: true,
    },
    {
      title: 'Certificado de desempleo',
      description:
        'Servicio electrónico de respuesta inmediata que permite obtener un informe de inscripción como desempleado',
      details: 'Necesitas certificado electrónico',
      phone: '983 327 850',
      url: 'https://www.tramitacastillayleon.jcyl.es/web/jcyl/AdministracionElectronica/es/Plantilla100Detalle/1251181050732/Servicio/1284751901573/Tramite',
      isActive: true,
    },
    {
      title: 'Renovación de la demanda de empleo',
      description:
        'Procedimiento para la renovación de la demanda de empleo en la oficina virtual del ECYL',
      details:
        'Necesitas disponer del NIF o NIE, el correo electrónico de los datos de la demanda y el pin de la tarjeta de demanda actual',
      phone: '987 249 530',
      url: 'https://empleocastillayleon.jcyl.es/oficinavirtual/index.do',
      isActive: true,
    },
    {
      title: 'Acceso a la vida laboral',
      description:
        'Obtener el informe en el que se recogen todas las situaciones de alta o baja de una persona en el conjunto de los distintos regímenes del sistema de la Seguridad Social',
      details:
        'Puedes acceder mediante Certificado electrónica, Cl@ve, usuario y contraseña o sin certificado a través de un SMS en un móvil registrado en el INSS',
      phone: '901 502 050',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias/Vida+laboral+e+informes/Informes+sobre+tu+situacion+laboral/Informe+de+tu+vida+laboral',
      isActive: true,
    },
    {
      title: 'Cita previa en la Seguridad Social',
      description:
        'Solicitar cita previa con el Instituto Nacional de la Seguridad Social (INSS) en los Centros de Atención e Información de la Seguridad Social (CAISS)',
      details: 'Puedes acceder con o sin identificación digital',
      phone: '915 412 530 | 901 106 570',
      url: 'https://w6.seg-social.es/ProsaInternetAnonimo/OnlineAccess?ARQ.SPM.ACTION=LOGIN&ARQ.SPM.APPTYPE=SERVICE&ARQ.IDAPP=XV106001&ORGANISMO=I',
      isActive: false,
    },
    {
      title: 'Registro de uniones de hecho',
      description:
        'El Registro de Uniones de Hecho tiene carácter administrativo y voluntario, y en él podrán ser inscritas las uniones de hecho que lo soliciten siempre que cumplan los requisitos establecidos',
      details:
        'Necesitas certificado digital o DNIe y presentar la documentación requerida en el trámite',
      phone: 'Sin servicio telefónico',
      url: 'https://www.tramitacastillayleon.jcyl.es/web/jcyl/AdministracionElectronica/es/Plantilla100Detalle/1284933058677/Tramite/1201782392856/Tramite',
      isActive: true,
    },
    {
      title: 'Certificado de antecedentes penales',
      description: 'Solicitud de Certificado de antecedentes penales',
      details: 'Necesitas acreditación digital: Certificado digital o Cl@ve',
      phone: 'Sin servicio telefónico',
      url: 'https://sede.mjusticia.gob.es/es/tramites/certificado-antecedentes',
      isActive: true,
    },
    {
      title: 'Solicitud cita previa SEPE',
      description: 'Solicitar cita previa en el SEPE',
      details: 'No necesitas identificación electrónica',
      phone: '912 738 384',
      url: 'https://sede.sepe.gob.es/portalSede/procedimientos-y-servicios/personas/proteccion-por-desempleo/cita;jsessionid=9EF99ABED96C6A865033F3B2CBB5F1AE.sedepropuba',
      isActive: true,
    },
    {
      title: 'Cita previa DNI y Pasaporte',
      description:
        'Solicitar cita previa para obtener o renovar el DNI y/o el pasaporte',
      details:
        'Puedes identificarte con los datos de tu DNI actual o con el DNIe. Si quieres abonar las tasas de forma online necesitas tener una tarjeta de crédito o débito',
      phone: 'Solo para información: 987 262043',
      url: 'https://www.citapreviadnie.es/citaPreviaDni/',
      isActive: true,
    },
    {
      title: 'Solicitud de tarjeta sanitaria SACYL',
      description:
        'Solicitar la tarjeta sanitaria del Sistema de salud de Castilla y León',
      details:
        'Necesitas un correo electrónico y un teléfono móvil, además, no es obligatorio, pero si cuentas con la tarjeta sanitaria rota o tu número de seguridad social puedes agilizar los trámites',
      phone: '987 840 530',
      url: 'https://www.saludcastillayleon.es/es/serviciosonline/tarjeta-sanitaria/formulario-solicitud-perdida-rotura',
      isActive: true,
    },
    {
      title: 'Cita médica SACYL',
      description: 'Solicitar cita previa con tu Centro de Salud',
      details: 'Necesitas la tarjeta sanitaria',
      phone: 'Utilice el que figura en el reverso de su tarjeta sanitaria',
      url: 'https://citaweb.saludcastillayleon.es/CitaPreviaWeb/#/start',
      isActive: true,
    },
  ],
};
