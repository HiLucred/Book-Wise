import { styled } from '../../../stitches.config'
import { Title } from '@/components/Typography'
import { Nunito } from 'next/font/google'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '0.75rem',
  marginBottom: '2.5rem',

  [`${Title}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
})

export const SearchBar = styled('form', {
  width: '27rem',
  padding: '1rem',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  input: {
    width: '100%',
    height: '100%',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    color: '$gray100',
  },

  button: {
    background: 'transparent',
    opacity: 0,
  },
})

export const CategoriesContainer = styled('div', {
  marginBottom: '3rem',
  display: 'flex',
  gap: '$2',
  flexWrap: 'wrap',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
})

const nunito = Nunito({ subsets: ["latin"] });

export const Categorie = styled('button', {
  listStyleType: 'none',
  borderRadius: '$full',
  padding: '$2 $3',
  transition: 'all 0.3s',
  fontFamily: `${nunito}`,

  '&:hover': {
    color: '$white',
    backgroundColor: '$purple200',
    cursor: 'pointer',
  },

  variants: {
    active: {
      true: {
        color: '$white',
        backgroundColor: '$purple200',
        border: '1px solid transparent',
      },

      false: {
        color: '$purple100',
        backgroundColor: 'transparent',
        border: '1px solid $purple100',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
})

export const BooksContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
})
