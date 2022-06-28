function ChallengeListPagenation() {
  return(
    <>
      <PaginationBox>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={300}
                    pageRangeDisplayed={5}
                    prevPageText="<"
                    nextPageText=">"
                    onChange={ handlePageChange }
                />
            </PaginationBox>
    </>
  );
};

export default ChallengeListPagenation;