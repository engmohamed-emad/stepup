import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Real anchor links (?page=N) for server-rendered, SEO-friendly pagination.
export default function PaginationLinks01() {
  const current = 2
  const total = 5

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?page=${current - 1}`} />
        </PaginationItem>
        {Array.from({ length: total }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink href={`?page=${i + 1}`} isActive={current === i + 1}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={`?page=${current + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
