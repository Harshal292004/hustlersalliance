type Profile = {
  username: string;
  book_code: string;
  level: number;
  started_at: string | null;
  ended_at: string | null;
  total_points: number;
  current_rank: number;
  best_rank: number;
  rank_status: string;
  test_1: boolean;
  test_2: boolean;
  test_3: boolean;
  reviews_on_book: string;
  rating_of_book: number;
};

type CombinedUser = Profile & {
  email: string;
};

export {Profile,CombinedUser}