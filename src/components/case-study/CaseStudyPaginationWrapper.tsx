'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import Pagination from '../shared/Pagination';
import LinkButton from '../ui/button/LinkButton';

export interface TeraCodeProject {
  slug: string;
  title: string;
  description: string;
  result: string;
  thumbnail: string;
  href: string;
  ctaLabel: string;
  isExternal?: boolean;
}

const CaseStudyPaginationWrapper = ({ caseStudies }: { caseStudies: TeraCodeProject[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const caseStudiesPerPage = 3;

  const totalPages = Math.ceil(caseStudies.length / caseStudiesPerPage);
  const startIndex = (currentPage - 1) * caseStudiesPerPage;
  const endIndex = startIndex + caseStudiesPerPage;
  const currentCaseStudies = caseStudies?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Grilla simétrica de 3 columnas (corregida) */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentCaseStudies?.map((caseStudy, index) => (
          <RevealAnimation
            delay={0.2 + index * 0.1}
            key={caseStudy.slug}
            className="flex h-full w-full"
          >
            <article
              className="group flex h-full w-full flex-col"
              itemScope
              itemType="http://schema.org/Article"
            >
              <div className="bg-background-1 dark:bg-background-6 flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-gray-200/70 transition-transform duration-500 hover:scale-[102%] dark:border-gray-800">
                <figure className="h-[240px] w-full overflow-hidden">
                  {caseStudy.isExternal ? (
                    <a href={caseStudy.href} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={caseStudy.thumbnail}
                        alt={caseStudy.title}
                        width={409}
                        height={260}
                        className="size-full object-cover"
                      />
                    </a>
                  ) : (
                    <Link href={caseStudy.href}>
                      <Image
                        src={caseStudy.thumbnail}
                        alt={caseStudy.title}
                        width={409}
                        height={260}
                        className="size-full object-cover"
                      />
                    </Link>
                  )}
                </figure>

                {/* Contenido */}
                <div className="flex flex-1 flex-col justify-between space-y-6 p-6">
                  <div className="space-y-3">
                    <h3 className="text-heading-5 line-clamp-2" itemProp="headline">
                      {caseStudy.title}
                    </h3>
                    <p itemProp="description" className="text-sm leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <p className="text-sm">
                      <span className="text-secondary dark:text-accent font-semibold">
                        Resultado:{' '}
                      </span>
                      {caseStudy.result}
                    </p>
                  </div>

                  {/* Botón */}
                  <div className="pt-2">
                    {caseStudy.isExternal ? (
                      <a
                        href={caseStudy.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-md btn-white dark:btn-transparent hover:!bg-[#1E62F5] hover:!text-white inline-block"
                      >
                        {caseStudy.ctaLabel} →
                      </a>
                    ) : (
                      <LinkButton
                        href={caseStudy.href}
                        className="btn btn-md btn-white dark:btn-transparent hover:btn-primary"
                        aria-label={`Ver detalles de ${caseStudy.title}`}
                        itemProp="url"
                      >
                        {caseStudy.ctaLabel}
                      </LinkButton>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </RevealAnimation>
        ))}
      </div>

      {/* Paginación (solo aparece si agregas más de 3 proyectos en el futuro) */}
      {totalPages > 1 && (
        <div className="mt-14">
          <RevealAnimation delay={0.5}>
            <Pagination
              totalItems={caseStudies.length}
              itemsPerPage={caseStudiesPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              className="mt-14"
            />
          </RevealAnimation>
        </div>
      )}
    </>
  );
};

CaseStudyPaginationWrapper.displayName = 'CaseStudyPaginationWrapper';
export default CaseStudyPaginationWrapper;