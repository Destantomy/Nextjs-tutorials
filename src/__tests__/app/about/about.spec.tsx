import '@testing-library/jest-dom';
import AboutPage from '@/app/about/page';
import AboutLayout from '@/app/about/layout';
import { render, screen } from '@testing-library/react';
 
describe('About Page', () => {
  it('should render', () => {
    render(
    <AboutLayout>
        <AboutPage />
    </AboutLayout>
    );
    // Menggunakan screen untuk mencari elemen dengan role heading
    const heading = screen.getByRole('heading', { level: 1 });

    // Verifikasi bahwa elemen ditemukan di dalam dokumen
    expect(heading).toBeInTheDocument();
  });
});
