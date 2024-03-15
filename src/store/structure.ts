import MeshImage from "@/assets/image/structure/mesh-gradient_2.png";

interface Structure {
    img: string;
    title: string;
    name: string;
}

export const structure: Structure[] = [
  {
    img: MeshImage,
    title: 'Manager Software Dev',
    name: 'Dwi Rudi Setiawan'
  },
  {
      img: MeshImage,
      title: 'Manager Multimedia',
      name: 'Billy Budiardjo'
  },
  {
      img: MeshImage,
      title: 'Manager Administrasi',
      name: 'Dwi Hendra Kusuma'
  },
  {
      img: MeshImage,
      title: 'Manager HRD',
      name: 'Dyah Ayu Mentari'
  }
]