// src/app/(admin)/customers/page.tsx


import CustomersGrid from "@/components/customers-grid";


export default function CustomersPage() {
 {/* const { isLoaded, user } = useUser();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded) {
      const role = (user?.publicMetadata as { role?: string })?.role;
      if (!user || role !== 'admin') {
        router.push('/');
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }*/} 

  return <CustomersGrid />;
}